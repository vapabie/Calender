package com.example.calender.service.serviceImp;

import com.example.calender.dto.RewardDto;
import com.example.calender.repo.RewardRepo;
import com.example.calender.service.RewardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RewardServiceImp implements RewardService {

    @Autowired
    private RewardRepo rewardRepo;

    @Override
    public RewardDto saveReward(RewardDto rewardDto){
        return null;
    }

    @Override
    public RewardDto findById(Integer id){
        return null;
    }
}
