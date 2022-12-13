package org.entando.hackaton;

import com.github.javafaker.Faker;
import java.util.Locale;
import org.entando.hackaton.entity.User;
import org.entando.hackaton.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataBootstrapper implements CommandLineRunner {

    @Autowired
    private final UserRepository userRepository;
    private final Faker faker = new Faker(Locale.getDefault());

    public DataBootstrapper(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public void run(String... args) {
        for (int i = 0; i < 10; i++) {
            userRepository.save(new User(faker.name().firstName(), faker.name().lastName(), faker.number().numberBetween(1, 100)));
        }
    }
}