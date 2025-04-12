package com.lolkekwpog.random_route_generator.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.lolkekwpog.random_route_generator.entities.Routes;
import com.lolkekwpog.random_route_generator.service.RoutesService;

@RestController
@RequestMapping("/api/routes")
public class RoutesController {
    
    @Autowired
    private RoutesService routesService;

    @GetMapping("/user/{userId}")
    public List<Routes> getUserRoutes(@PathVariable int userId)
    {
        return routesService.getAllUserRoutes(userId);
    }

    @PostMapping("/create/{userId}/{longitude}/{latitude}")
    public Routes createUserRoute(@PathVariable int userId, @PathVariable double longitude, @PathVariable double latitude)
    {
        return routesService.pickRandomRoute(userId, longitude, latitude);
    }
}
