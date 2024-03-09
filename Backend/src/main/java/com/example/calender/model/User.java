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
    private String email;

    @Column(name ="username")
    private String username;

    @Column(name ="password")
    private String password;

    @Column(name ="points")
    private int points;

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return points == user.points && Objects.equals(email, user.email) && Objects.equals(username, user.username) && Objects.equals(password, user.password);
    }

    @Override
    public int hashCode() {
        return Objects.hash(email, username, password, points);
    }
}
