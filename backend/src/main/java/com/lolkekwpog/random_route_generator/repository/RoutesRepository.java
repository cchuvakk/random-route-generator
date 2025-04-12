package com.lolkekwpog.random_route_generator.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lolkekwpog.random_route_generator.entities.Routes;

@Repository
public interface RoutesRepository extends JpaRepository<Routes, Integer> {
    List<Routes> findByUserId(int userid);
}
