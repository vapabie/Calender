package com.example.calender.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter @Setter @NoArgsConstructor
@Table( name = "priority")
public class Priority {

    @Id
    @GeneratedValue
    @Column(name = "priorityid")
    private long priorityID;

    @Column(name = "priorityname")
    private String priorityName;

    @Column( name = "prioritypoints")
    private int priorityPoints;


}
