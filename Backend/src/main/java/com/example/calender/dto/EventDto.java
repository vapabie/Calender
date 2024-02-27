package com.example.calender.dto;

import com.example.calender.model.Color;
import com.example.calender.model.Priority;
import com.example.calender.model.User;

import java.time.LocalDateTime;

public class EventDto {
    private Long EventID;
    private User Username;
    private String EventName;
    private String Location;
    private Priority PriorityID;
    private Boolean isAllDay;
    private LocalDateTime Start;
    private LocalDateTime End;
    private Color Color;

}
