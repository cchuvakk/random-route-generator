package com.lolkekwpog.random_route_generator.dto;

public class RegistrationRequest {
    private String firebase_uid;

    private String username;

    public String getFirebaseUid()
    {
        return firebase_uid;
    }

    public void setFirebaseUid(String firebaseUid)
    {
        this.firebase_uid = firebaseUid;
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
