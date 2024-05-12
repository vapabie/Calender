package com.example.calender.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Table( name = "priority")
public class Priority {

    @Id
    @GeneratedValue
    @Column(name = "priorityid")
    private Long priorityID;

    @NotNull
    @Column(name = "priorityname")
    private String priorityName;

    @NotNull
    @Column( name = "prioritypoints")
    private int priorityPoints;


}
