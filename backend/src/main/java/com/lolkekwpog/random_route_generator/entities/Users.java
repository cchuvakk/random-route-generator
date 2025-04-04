package com.lolkekwpog.random_route_generator.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;


import jakarta.persistence.Column;

@Entity
@Table(name = "Users")
public class Users {
    
    @Id
    @GeneratedValue
    (
        strategy = GenerationType.IDENTITY
    )
    @Column
    (
        name = "id",
        updatable = false
    )
    private int id;

    @Column
    (
        name = "firebase_uid",
        nullable = false
    )
    private String firebase_uid;

    @Column
    (
        name = "username",
        nullable = false
    )
    private String username;
    
    public Users(int id, String firebase_uid, String username)
    {
        this.id = id;
        this.firebase_uid = firebase_uid;
        this.username = username;
    }

    public int getId()
    {
        return id;
    }

    public void setId(int id)
    {
        this.id = id;
    }

    public String getFirebaseUid()
    {
        return firebase_uid;
    }

    public void setFirebaseId(String firebase_uid)
    {
        this.firebase_uid = firebase_uid;
    }

    public String getUsername()
    {
        return username;
    }

    public void setUsername(String username)
    {
        this.username = username;
    }
}
