package com.example.calender.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Entity
@Data
@Table(name = "rewards")
public class Reward {

    @Id
    @GeneratedValue
    @Column(name = "rewardid")
    private Long rewardID;

    @NotNull
    @Column(name = "r_name")
    private String rewardName;

    @NotNull
    @Column(name = "r_price")
    private int price;
}
