package com.example.calender.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Getter @Setter @NoArgsConstructor
@Table( name = "event")
public class Event {

    @Id
    @GeneratedValue
    @Column(name = "eventid")
    private Long eventID;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_email")
    private User email;

    @Column(name = "eventname")
    private String eventName;

    @Column(name = "location")
    private String location;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_priorityid")
    private Priority priorityID;

    @Column(name = "isallday")
    private Boolean isAllDay;

    @Column(name = "starttime")
    private LocalDateTime startTime;

    @Column(name = "endtime")
    private LocalDateTime endTime;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_hexcode")
    private Color color;

}
