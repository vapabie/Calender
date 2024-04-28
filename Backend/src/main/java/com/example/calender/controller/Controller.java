package com.example.calender.controller;

import com.example.calender.model.Event;
import com.example.calender.repo.EventRepo;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/home")
public class Controller {

    private final EventRepo eventRepo;


    public Controller(EventRepo eventRepo) {
        this.eventRepo = eventRepo;
    }

    @GetMapping
    public List<Event> getEvents(){
        return eventRepo.findAll();
    }

    @GetMapping("/{eventID}")
    public Event getEvent(@PathVariable Long eventID){
        return eventRepo.findById(eventID).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createEvent(@RequestBody Event event) throws URISyntaxException {
        Event savedEvent = eventRepo.save(event);
        return ResponseEntity.created(new URI("/home/" + savedEvent.getEventID())).body(savedEvent);
    }

    @PostMapping("/{eventID}")
    public ResponseEntity updateEvent(@PathVariable Long eventID, @RequestBody Event event){
        Event currentEvent = eventRepo.findById(eventID).orElseThrow(RuntimeException::new);
        currentEvent.setEventName(event.getEventName());
        currentEvent.setLocation(event.getLocation());
        currentEvent.setPriorityID(event.getPriorityID());
        currentEvent.setIsAllDay(event.getIsAllDay());
        currentEvent.setStartTime(event.getStartTime());
        currentEvent.setEndTime(event.getEndTime());
        currentEvent.setColor(event.getColor());

        return ResponseEntity.ok(currentEvent);
    }

     @DeleteMapping("/{eventID}")
    public ResponseEntity deleteEvent(@PathVariable Long eventID){
        eventRepo.deleteById(eventID);
        return ResponseEntity.ok().build();
     }

}
