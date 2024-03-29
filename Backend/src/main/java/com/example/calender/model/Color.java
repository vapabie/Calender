package com.example.calender.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Objects;

@Entity
@Data
@Table(name = "color")
public class Color {

    @Id
    @Column( name ="hexcode")
    private String hexcode;

    @Column(name = "colorname")
    private String colorName;

}
