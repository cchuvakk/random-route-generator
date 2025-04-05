package com.lolkekwpog.random_route_generator.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lolkekwpog.random_route_generator.entities.UserStats;

@Repository
public interface UserStatsRepository extends JpaRepository<UserStats, Integer> {
    // плейсхолдер, потом что то добавить надо
}
