package com.lolkekwpog.random_route_generator.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lolkekwpog.random_route_generator.dto.RegistrationRequest;
import com.lolkekwpog.random_route_generator.entities.Users;
import com.lolkekwpog.random_route_generator.service.UsersService;

@RestController
@RequestMapping("api/users")
@CrossOrigin(origins = "http://localhost:4200")
public class UsersController {
    
    private static final Logger logger = LoggerFactory.getLogger(UsersController.class);


    @Autowired
    private UsersService usersService;

    @PostMapping("/register")
    public ResponseEntity<Users> registerUser(@RequestBody RegistrationRequest request)
    {
        logger.info(">>> Запрос регистрации: UID = {}, Username = {}", request.getFirebaseUid(), request.getUsername());

         Users user = usersService.registerUser(request.getFirebaseUid(), request.getUsername());

        logger.info(">>> Пользователь зарегистрирован: {}", user);
         return ResponseEntity.ok(user);
    }
}
