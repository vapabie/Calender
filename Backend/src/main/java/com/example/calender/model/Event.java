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
    @JoinColumn(name = "fk_username")
    private User username;

    @Column(name = "eventname")
    private String eventName;

    @Column(name = "location")
    private String location;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_priorityid")
    private Priority priorityID;

    @Column(name = "isallday")
    private Boolean isAllDay;

    @Column(name = "start")
    private LocalDateTime startTime;

    @Column(name = "end")
    private LocalDateTime endTime;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_hexcode")
    private Color color;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Event event = (Event) o;
        return priorityID == event.priorityID && Objects.equals(eventID, event.eventID) && Objects.equals(username, event.username) && Objects.equals(eventName, event.eventName) && Objects.equals(location, event.location) && Objects.equals(isAllDay, event.isAllDay) && Objects.equals(startTime, event.startTime) && Objects.equals(endTime, event.endTime) && Objects.equals(color, event.color);
    }

    @Override
    public int hashCode() {
        return Objects.hash(eventID, username, eventName, location, priorityID, isAllDay, startTime, endTime, color);
    }
}
