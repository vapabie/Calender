package com.example.calender.entity;

import jakarta.persistence.*;
import jakarta.persistence.criteria.CriteriaBuilder;

@Entity
@Table( name = "priority")
public class Priority {

    @Id
    @GeneratedValue
    @Column(name = "priorityid")
    private int PriorityId;

    @Column(name = "priorityname")
    private String PriorityName;

    @Column( name = "prioritypoints")
    private int PriorityPoints;
}
