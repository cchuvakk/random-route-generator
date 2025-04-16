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
    private String firebaseuid;

    @Column
    (
        name = "username"
    )
    private String username;
    
    public Users(){ }

    public Users(int id, String firebaseuid, String username)
    {
        this.id = id;
        this.firebaseuid = firebaseuid;
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

    public String getFirebaseuid()
    {
        return firebaseuid;
    }

    public void setFirebaseuid(String firebaseuid)
    {
        this.firebaseuid = firebaseuid;
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
