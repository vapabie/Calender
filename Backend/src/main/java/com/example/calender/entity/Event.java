package com.example.calender.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;
import java.util.Objects;

@Entity
@Table( name = "event")
public class Event {

    @Id
    @GeneratedValue
    @Column(name = "eventid")
    private Long EventID;

    @Column(name = "username")
    private String Username;

    @Column(name = "eventname")
    private String EventName;

    @Column(name = "location")
    private String Location;

    @Column(name = "priorityid")
    private int PriorityID;

    @Column(name = "isallday")
    private Boolean isAllDay;

    @Column(name = "start")
    private LocalDateTime Start;

    @Column(name = "end")
    private LocalDateTime End;

    @Column(name = "color")
    private String Colort;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Event event = (Event) o;
        return PriorityID == event.PriorityID && Objects.equals(EventID, event.EventID) && Objects.equals(Username, event.Username) && Objects.equals(EventName, event.EventName) && Objects.equals(Location, event.Location) && Objects.equals(isAllDay, event.isAllDay) && Objects.equals(Start, event.Start) && Objects.equals(End, event.End) && Objects.equals(Colort, event.Colort);
    }

    @Override
    public int hashCode() {
        return Objects.hash(EventID, Username, EventName, Location, PriorityID, isAllDay, Start, End, Colort);
    }
}
