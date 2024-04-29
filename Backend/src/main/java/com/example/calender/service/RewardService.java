package com.example.calender.service;

import com.example.calender.dto.RewardDto;
import com.example.calender.repo.RewardRepo;

public interface RewardService {

    RewardDto saveReward(RewardDto rewardDto);

    RewardDto findById(Integer id);
}
