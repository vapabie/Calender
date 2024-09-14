package com.example.calender.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


import java.util.Collection;
import java.util.List;

@Entity
@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "userc")
public class User{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "userid")
    private Long userID;

    @Email
    @NotBlank
    @Column(name = "email", unique = true)
    private String email;

    @NotBlank
    @Column(name ="name")
    private String name;

    @NotBlank
    @Column(name ="userpassword")
    private String password;

    @Column(name ="points", columnDefinition = "integer default 0")
    private Integer points;

    @Column(name = "isadmin", columnDefinition = "boolean default false")
    private boolean isAdmin;

    @OneToMany(mappedBy = "userID", cascade = CascadeType.ALL, fetch = FetchType.EAGER)
    private List<Event> userEvents;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private Role role;


}
