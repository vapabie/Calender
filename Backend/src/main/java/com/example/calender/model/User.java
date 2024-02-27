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
@Table(name = "user")
public class User {

    @Id
    @Column(name = "email")
    private String Email;

    @Id
    @Column(name ="username")
    private String Username;

    @Column(name ="password")
    private String Password;

    @Column(name ="points")
    private int Points;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Points == user.Points && Objects.equals(Email, user.Email) && Objects.equals(Username, user.Username) && Objects.equals(Password, user.Password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(Email, Username, Password, Points);
    }
}
