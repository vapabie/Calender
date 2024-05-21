package com.example.calender.controller;

import com.example.calender.dto.EventDto;
import com.example.calender.service.serviceImp.EventServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

@RestController
@RequestMapping("/calendarwebapp/home/user/events")
@CrossOrigin
public class EventController {

    @Autowired
    private EventServiceImp eventServiceImp;


    @PostMapping("/addevent")
    public ResponseEntity<EventDto> addEvent(@RequestBody EventDto eventDto) {
        EventDto eventAdded = eventServiceImp.saveEvent(eventDto);
        return new ResponseEntity<>(eventAdded, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<EventDto> updateEvent(@RequestBody EventDto eventDto, @PathVariable Long id){
        if(!eventServiceImp.isValidId(id)){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        eventDto.setEventID(id);
        EventDto eventDto1 = eventServiceImp.saveEvent(eventDto);
        return new ResponseEntity<>(eventDto1, HttpStatus.CREATED);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteEvent(@PathVariable Long id){
        if(!eventServiceImp.isValidId(id)){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        eventServiceImp.deleteEvent(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/{userId}/date")
    public ResponseEntity<List<EventDto>> getEventsByUserAndDate(@PathVariable Long userId, @RequestParam("date")LocalDate date){
        List<EventDto> events = eventServiceImp.findEventsByUserAndDate(userId, date);
        return new ResponseEntity<>(events, HttpStatus.OK);
    }

}