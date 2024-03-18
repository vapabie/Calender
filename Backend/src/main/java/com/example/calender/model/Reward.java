package com.example.calender.model;

import jakarta.persistence.*;
import lombok.Data;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Data
@Table(name = "rewards")
public class Reward {

    @Id
    @GeneratedValue
    @Column(name = "rewardid")
    private long rewardID;

    @Column(name = "r_name")
    private String rewardName;

    @Column(name = "r_price")
    private int price;
}
