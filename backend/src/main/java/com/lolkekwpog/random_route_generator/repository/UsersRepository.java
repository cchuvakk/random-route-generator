package com.lolkekwpog.random_route_generator.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.lolkekwpog.random_route_generator.entities.Users;

@Repository
public interface UsersRepository extends JpaRepository<Users, Integer> {
    // плейсхолдер, потом что то добавить надо
}
