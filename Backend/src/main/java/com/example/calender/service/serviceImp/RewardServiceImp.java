package com.example.calender.service.serviceImp;


import com.example.calender.dto.RewardDto;
import com.example.calender.model.Reward;
import com.example.calender.repo.RewardRepo;
import com.example.calender.service.RewardService;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RewardServiceImp implements RewardService {

    @Autowired
    private RewardRepo rewardRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public RewardDto saveReward(RewardDto rewardDto){
        rewardRepo.save(modelMapper.map(rewardDto, Reward.class));
        return rewardDto;
    }

    @Override
    public RewardDto findRewardById(Long id){
        Optional<Reward> reward = rewardRepo.findById(id);
        RewardDto rewardDto = modelMapper.map(reward, RewardDto.class);
        if (reward.isEmpty()){
            throw new EntityNotFoundException("No reward Found With This ID: " + id);
        }else {
            return rewardDto;}
    }

    @Override
    public List<RewardDto> findAllReward() {
        List<Reward> rewardList = rewardRepo.findAll();
        return modelMapper.map(rewardList, new TypeToken<List<RewardDto>>(){}.getType());
    }

    @Override
    public void deleteReward(Long id) {
        if (!isValidId(id)){
            throw new EntityNotFoundException("No Reward Found With This ID: " + id);
        }
        rewardRepo.deleteById(id);
    }

    @Override
    public boolean isValidId(Long id) {
        return rewardRepo.existsById(id);
    }
}
