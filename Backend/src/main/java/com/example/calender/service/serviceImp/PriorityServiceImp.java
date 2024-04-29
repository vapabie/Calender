package com.example.calender.service.serviceImp;

import com.example.calender.dto.PriorityDto;
import com.example.calender.repo.PriorityRepo;
import com.example.calender.service.PriorityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PriorityServiceImp implements PriorityService {

    @Autowired
    private PriorityRepo priorityRepo;

    @Override
    public PriorityDto savePriority(PriorityDto priorityDto){
        return null;
    }

    @Override
    public PriorityDto findById(Integer id){
        return null;
    }


}
