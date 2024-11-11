package com.example.calender.service.serviceImp;

import com.example.calender.dto.ColorDto;
import com.example.calender.dto.EventDto;
import com.example.calender.model.Color;
import com.example.calender.model.Event;
import com.example.calender.model.User;
import com.example.calender.repo.ColorRepo;
import com.example.calender.repo.EventRepo;
import com.example.calender.repo.UserRepo;
import com.example.calender.service.EventService;
import jakarta.persistence.EntityNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class EventServiceImp implements EventService {

    @Autowired
    private EventRepo eventRepo;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ColorRepo colorRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public EventDto saveEvent(EventDto eventDto) {
       eventRepo.save(modelMapper.map(eventDto, Event.class));
        return eventDto;
    }

    @Override
    public EventDto findById(Long id) {
        Optional<Event> event = eventRepo.findById(id);
        EventDto eventDto = modelMapper.map(event, EventDto.class);
        if (event.isEmpty()){
            throw new EntityNotFoundException("No Event Found With This ID: " + id);
        }else {
            return eventDto;}
    }

    @Override
    public void deleteEvent(Long id) {
        if (!isValidId(id)){
            throw new EntityNotFoundException("No Event Found With This Id: " + id);
        }
        eventRepo.deleteById(id);
    }

    @Override
    public boolean isValidId(Long id) {
        return eventRepo.existsById(id);
    }

    @Override
    public List<EventDto> findEventsByUserAndDate(Long userId, LocalDate date) {
        User user = userRepo.findById(userId).orElseThrow(()-> new EntityNotFoundException("No User Found With This ID: " + userId));
        List<Event> events = eventRepo.findEventsByUserAndDate(user, date);
        return events.stream()
                .map(event -> modelMapper.map(event, EventDto.class)).collect(Collectors.toList());
    }
}
