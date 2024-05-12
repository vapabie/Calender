package com.example.calender.service;


import com.example.calender.dto.PriorityDto;


import java.util.List;

public interface PriorityService {

    PriorityDto savePriority(PriorityDto priorityDto);

    public PriorityDto findPriorityById(Long id);

    List<PriorityDto> findAllPriority();

    void deletePriority(Long id);

    boolean isValidId( Long id);


}
