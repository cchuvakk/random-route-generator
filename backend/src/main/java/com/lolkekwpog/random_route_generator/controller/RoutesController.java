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

    /* использование (для тестирования): честно говоря я не понимаю как оно работает, но, как я понял, в первом параметре должно быть всегда больше?
    *  чем во втором, например: долгота: 55.7544, широта: 37.6119 <- не заработает! я не знаю почему, мне просто пофиг уже честно говоря
    *  в общем, нужно делать наоборот: долгота: 37.6119, широта: 55.7544, это либо я тупой, либо что то не так с этим тупым API
    *  может уберу этот коммент позже!
    */
    @PostMapping("/create/{userId}/lo={longitude}/la={latitude}")
    public Routes createUserRoute(@PathVariable int userId, @PathVariable double longitude, @PathVariable double latitude)
    {
        return routesService.pickRandomRoute(userId, longitude, latitude);
    }

    @PostMapping("user/complete/{routeId}")
    public Routes completeRoute(@PathVariable int routeId)
    {
        return routesService.completeRoute(routeId);
    }
}
