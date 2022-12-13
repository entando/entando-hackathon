package org.entando.hackaton.controller;

import java.util.Date;
import java.util.List;
import java.util.Map;
import org.entando.hackaton.entity.User;
import org.entando.hackaton.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class UserController {

    @Autowired
    private UserService userService;

    @GetMapping("/timestamp")
    @PreAuthorize("hasAnyAuthority('user-service-role')")
    public @ResponseBody Map<String, String> timestamp() {
        return Map.of("timestamp", new Date().toString());
    }

    @GetMapping("/users")
    @PreAuthorize("hasAnyAuthority('user-service-role')")
    public @ResponseBody List<User> getUsers() {
        return userService.getAllUsers();
    }

    @PostMapping("/users")
    @PreAuthorize("hasAnyAuthority('user-service-role')")
    public @ResponseBody User createUser(@RequestBody User user) {
        return userService.createUser(user);
    }
}