package com.example.calender.service.serviceImp;

import com.example.calender.dto.EventDto;
import com.example.calender.repo.EventRepo;
import com.example.calender.service.EventService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class EventServiceImp implements EventService {

    @Autowired
    private EventRepo eventRepo;

    @Override
    public EventDto saveEvent(EventDto eventDto) {
        return null;
    }

    @Override
    public EventDto findById(Integer id) {
        return null;
    }
}
