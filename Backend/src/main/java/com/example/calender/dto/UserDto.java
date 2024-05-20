package com.example.calender.dto;

import lombok.Data;

@Data
public class UserDto {

    private Long userID;
    private String email;
    private String username;
    private String password;
    private int points;
    private boolean isAdmin;
}
