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
    private Long EventID;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_username")
    private User Username;

    @Column(name = "eventname")
    private String EventName;

    @Column(name = "location")
    private String Location;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_priorityid")
    private Priority PriorityID;

    @Column(name = "isallday")
    private Boolean isAllDay;

    @Column(name = "start")
    private LocalDateTime Start;

    @Column(name = "end")
    private LocalDateTime End;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "fk_hexcode")
    private Color Color;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Event event = (Event) o;
        return PriorityID == event.PriorityID && Objects.equals(EventID, event.EventID) && Objects.equals(Username, event.Username) && Objects.equals(EventName, event.EventName) && Objects.equals(Location, event.Location) && Objects.equals(isAllDay, event.isAllDay) && Objects.equals(Start, event.Start) && Objects.equals(End, event.End) && Objects.equals(Color, event.Color);
    }

    @Override
    public int hashCode() {
        return Objects.hash(EventID, Username, EventName, Location, PriorityID, isAllDay, Start, End, Color);
    }
}
