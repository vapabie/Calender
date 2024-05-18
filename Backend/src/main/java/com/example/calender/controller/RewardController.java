package com.example.calender.controller;

import com.example.calender.dto.RewardDto;
import com.example.calender.service.serviceImp.RewardServiceImp;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/calendarwebapp/home/admin/rewards")
@CrossOrigin
public class RewardController {

    @Autowired
    private RewardServiceImp rewardServiceImp;

    @GetMapping("")
    public ResponseEntity<List<RewardDto>> getAllReward(){
        List<RewardDto> rewardDtoList = rewardServiceImp.findAllReward();
        return new ResponseEntity<>(rewardDtoList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<RewardDto> getReward(@PathVariable Long id){

        if(!rewardServiceImp.isValidId(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        RewardDto rewardDto = rewardServiceImp.findRewardById(id);
        return new ResponseEntity<>(rewardDto, HttpStatus.OK);
    }

    @PostMapping("/addreward")
    public ResponseEntity<RewardDto> addReward(@RequestBody RewardDto rewardDto){
        RewardDto rewardAdded = rewardServiceImp.saveReward(rewardDto);
        return new ResponseEntity<>(rewardAdded, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<RewardDto> updateReward(@RequestBody RewardDto rewardDto, @PathVariable Long id){
        if(!rewardServiceImp.isValidId(id)){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        rewardDto.setRewardID(id);
        RewardDto rewardDto1 = rewardServiceImp.saveReward(rewardDto);
        return new ResponseEntity<>(rewardDto1, HttpStatus.CREATED);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteReward(@PathVariable Long id){
        if (!rewardServiceImp.isValidId(id)){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        rewardServiceImp.deleteReward(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }


}
