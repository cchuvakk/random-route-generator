package com.lolkekwpog.random_route_generator.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.lolkekwpog.random_route_generator.entities.Users;
import com.lolkekwpog.random_route_generator.repository.UsersRepository;

@Service
public class UsersService {
    
    @Autowired
    private UsersRepository usersRepository;

    public Users registerUser(String firebaseUid, String username) {
    if (usersRepository.findByFirebaseuid(firebaseUid).isPresent()) {
        throw new RuntimeException("чувак уже существует");
    }

    Users user = new Users();
    user.setFirebaseuid(firebaseUid);
    user.setUsername(username);
    return usersRepository.save(user);
}
}
