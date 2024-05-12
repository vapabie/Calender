package com.example.calender.service.serviceImp;


import com.example.calender.dto.PriorityDto;
import com.example.calender.model.Priority;
import com.example.calender.repo.PriorityRepo;
import com.example.calender.service.PriorityService;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PriorityServiceImp implements PriorityService {

    @Autowired
    private PriorityRepo priorityRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public PriorityDto savePriority(PriorityDto priorityDto){
        priorityRepo.save(modelMapper.map(priorityDto, Priority.class));
        return priorityDto;
    }

    @Override
    public PriorityDto findPriorityById(Long  id){
        Optional<Priority> priority = priorityRepo.findById(id);
        PriorityDto priorityDto = modelMapper.map(priority, PriorityDto.class);
        if (priority.isEmpty()){
            throw new EntityNotFoundException("No Priority Found With This ID: " + id);
        }else {
            return priorityDto;}
    }
    @Override
    public List<PriorityDto> findAllPriority() {
        List<Priority> priorityList = priorityRepo.findAll();
        return modelMapper.map(priorityList, new TypeToken<List<PriorityDto>>(){}.getType());
    }

    @Override
    public void deletePriority(Long id) {

        if (!isValidId(id)){
            throw new EntityNotFoundException("No Priority Found With This ID: " + id);
        }
        priorityRepo.deleteById(id);

    }

    @Override
    public boolean isValidId(Long id) {
        return priorityRepo.existsById(id);
    }

}
