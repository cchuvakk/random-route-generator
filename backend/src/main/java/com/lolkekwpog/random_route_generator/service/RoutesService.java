package com.lolkekwpog.random_route_generator.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lolkekwpog.random_route_generator.entities.Routes;
import com.lolkekwpog.random_route_generator.repository.RoutesRepository;

@Service
public class RoutesService {
    
    @Autowired
    private RoutesRepository routesRepository;

    public RoutesService(RoutesRepository routesRepository)
    {
        this.routesRepository = routesRepository;
    }

    public List<Routes> getAllUserRoutes(int id)
    {
        return routesRepository.findUserById(id);
    }
}
