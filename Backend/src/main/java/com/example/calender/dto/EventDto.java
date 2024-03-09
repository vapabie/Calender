package com.example.calender.dto;

import com.example.calender.model.Color;
import com.example.calender.model.Priority;
import com.example.calender.model.User;

import java.time.LocalDateTime;

public class EventDto {
    private Long eventID;
    private User username;
    private String eventName;
    private String location;
    private Priority priorityID;
    private Boolean isAllDay;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private Color color;

}
