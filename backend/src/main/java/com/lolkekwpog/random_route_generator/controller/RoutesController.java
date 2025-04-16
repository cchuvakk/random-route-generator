package com.lolkekwpog.random_route_generator.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
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
    public ResponseEntity<List<Routes>> getUserRoutes(@PathVariable int userId)
    {
        List<Routes> routes = routesService.getAllUserRoutes(userId);
        
        return ResponseEntity.ok(routes);
    }

    // лан надо было просто поменять местами долготу и широту, теперь все норм должно быть!
    @PostMapping("/create/{userId}/la={longitude}/lo={latitude}")
    public ResponseEntity<Routes> createUserRoute(@PathVariable int userId, @PathVariable double longitude, @PathVariable double latitude)
    {
        Routes randomRoute = routesService.pickRandomRoute(userId, longitude, latitude);

        return ResponseEntity.ok(randomRoute);
    }

    @PostMapping("user/complete/{routeId}")
    public ResponseEntity<Routes> completeRoute(@PathVariable int routeId)
    {
        Routes completedRoute = routesService.completeRoute(routeId);
        
        return ResponseEntity.ok(completedRoute);
    }
}
