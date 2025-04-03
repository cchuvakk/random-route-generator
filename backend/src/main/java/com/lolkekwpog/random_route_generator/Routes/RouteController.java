package com.lolkekwpog.random_route_generator.Routes;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/routes")
public class RouteController {
    @GetMapping
    public String sayHello() {
        return "test!";
    }

    @PostMapping
    public int sayLOl(){
        return 0;
    }
}
