package com.example.calender.service;

import com.example.calender.dto.EventDto;

import java.util.List;

public interface EventService {

    EventDto saveEvent(EventDto eventDto);

    EventDto findById(Integer id);


}
