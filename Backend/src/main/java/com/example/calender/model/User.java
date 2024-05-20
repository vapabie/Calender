package com.example.calender.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@Table(name = "userc")
public class User {

    @Id
    @GeneratedValue
    @Column(name = "userid")
    private Long userID;

    @NotNull
    @Column(name = "email", unique = true)
    private String email;

    @NotNull
    @Column(name ="username")
    private String username;

    @NotNull
    @Column(name ="userpassword")
    private String password;

    @Column(name ="points", columnDefinition = "integer default 0")
    private Integer points;

    @Column(name = "isadmin", columnDefinition = "boolean default false")
    private boolean isAdmin;

    @OneToMany(mappedBy = "userID", cascade = CascadeType.ALL)
    private List<Event> userEvents = new ArrayList<>();




}
