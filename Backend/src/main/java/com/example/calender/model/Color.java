package com.example.calender.model;

import jakarta.persistence.*;
import lombok.Data;
import jakarta.validation.constraints.NotNull;

@Entity
@Data
@Table(name = "color")
public class Color {

    @Id
    @GeneratedValue
    @Column(name = "colorid")
    private Long colorID;

    @NotNull
    @Column( name ="hexcode", unique = true)
    private String hexcode;

    @NotNull
    @Column(name = "colorname")
    private String colorName;
}
