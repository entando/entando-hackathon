package org.entando.hackaton;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.security.oauth2.jwt.JwtDecoder;

@SpringBootTest
class UserServiceApplicationTests {

	@MockBean
	JwtDecoder jwtDecoder;

	@Test
	void contextLoads() {
	}

}
