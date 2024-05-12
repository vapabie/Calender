package com.example.calender.service;

import com.example.calender.dto.RewardDto;

import java.util.List;

public interface RewardService {

    public RewardDto saveReward(RewardDto rewardDto);

    RewardDto findRewardById(Long id);

    List<RewardDto> findAllReward();

    void deleteReward (Long id);

    boolean isValidId(Long id);

}
