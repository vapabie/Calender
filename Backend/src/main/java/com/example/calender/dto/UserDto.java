package com.example.calender.dto;



import lombok.Data;

import java.util.List;

@Data
public class UserDto {

    private Long userID;
    private String email;
    private String name;
    private String userpassword;
    private int points;
    private boolean disAdmin;
    private List<EventDto> userEvents;
}
