package com.example.calender.model;

import jakarta.persistence.*;

@Entity
@Table(name = "rewards")
public class Rewards {

    @Id
    @GeneratedValue
    @Column(name = "rewardid")
    private long RewardId;

    @Column(name = "r_name")
    private String RewardName;

    @Column(name = "r_price")
    private int Price;
}
