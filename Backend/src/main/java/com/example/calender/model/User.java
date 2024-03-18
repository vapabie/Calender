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
@Table(name = "users")
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

}
