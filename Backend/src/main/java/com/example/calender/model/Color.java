package com.example.calender.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Objects;

@Entity
@Getter @Setter @NoArgsConstructor
@Table(name = "color")
public class Color {

    @Id
    @Column( name ="hexcode")
    private String Hexcode;

    @Column(name = "colorname")
    private String ColorName;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Color color = (Color) o;
        return Objects.equals(Hexcode, color.Hexcode) && Objects.equals(ColorName, color.ColorName);
    }

    @Override
    public int hashCode() {
        return Objects.hash(Hexcode, ColorName);
    }
}