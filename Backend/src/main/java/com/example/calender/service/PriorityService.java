package com.example.calender.service;

import com.example.calender.dto.PriorityDto;
import jakarta.persistence.criteria.CriteriaBuilder;

public interface PriorityService {

    PriorityDto savePriority(PriorityDto priorityDto);

    PriorityDto findById(Integer id);
}
