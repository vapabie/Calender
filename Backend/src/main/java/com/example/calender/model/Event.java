package com.example.calender.model;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;


@Entity
@Data
@Table( name = "event")
public class Event {

    @Id
    @GeneratedValue
    @Column(name = "eventid")
    private Long eventID;

    @ManyToOne
    @JoinColumn(name = "fk_userid")
    private User userID;

    @Column(name = "eventname")
    private String eventName;

    @Column(name = "location")
    private String location;

    @ManyToOne
    @JoinColumn(name = "fk_priorityid")
    private Priority priority;

    @Column(name = "isallday")
    private Boolean isAllDay;

    @Column(name = "startdate")
    private LocalDateTime startDate;

    @Column(name = "enddate")
    private LocalDateTime endDate;

    @ManyToOne
    @JoinColumn(name = "fk_colorid")
    private Color color;
}
