package com.lolkekwpog.random_route_generator.controller;

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
    @Autowired
    private UsersService usersService;

    @PostMapping("/register")
    public ResponseEntity<Users> registerUser(@RequestBody RegistrationRequest request)
    {
         Users user = usersService.registerUser(request.getFirebaseUid(), request.getUsername());
         return ResponseEntity.ok(user);
    }
}
