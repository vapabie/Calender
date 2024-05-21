package com.example.calender.service;

import com.example.calender.dto.EventDto;
import com.example.calender.model.Event;

import java.time.LocalDate;
import java.util.List;

public interface EventService {

    EventDto saveEvent(EventDto eventDto);

    EventDto findById(Long id);
    void deleteEvent(Long id);
    boolean isValidId(Long id);

    List<EventDto> findEventsByUserAndDate(Long userId, LocalDate date);


}
