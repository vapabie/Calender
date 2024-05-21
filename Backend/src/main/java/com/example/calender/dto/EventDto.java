package com.example.calender.dto;

import com.example.calender.model.Priority;
import com.example.calender.model.User;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;

@Data

public class EventDto {
    private Long eventID;
    private Long userID;
    private String eventName;
    private String location;
    private Long priorityID;
    private Boolean isAllDay;
    private LocalDate startDate;
    private LocalDate endDate;
    private LocalTime startTime;
    private LocalTime endTime;
    private Long colorID;

}
