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
    private Priority priorityID;

    @Column(name = "isallday")
    private Boolean isAllDay;

    @Column(name = "startdate")
    private LocalDate startDate;

    @Column(name = "enddate")
    private LocalDate endDate;

    @Column(name = "starttime")
    private LocalTime startTime;

    @Column(name = "endtime")
    private LocalTime endTime;

    @ManyToOne
    @JoinColumn(name = "fk_colorid")
    private Color color;
}
