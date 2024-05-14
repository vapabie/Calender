package com.example.calender.controller;

import com.example.calender.dto.PriorityDto;
import com.example.calender.service.serviceImp.PriorityServiceImp;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/calendarwebapp/home/admin/prioritys")
@AllArgsConstructor
@CrossOrigin
public class PriorityController {

    @Autowired
    private PriorityServiceImp priorityServiceImp;



    @GetMapping("")
    public ResponseEntity<List<PriorityDto>> getAllPriority(){
        List<PriorityDto> priorityDtoList = priorityServiceImp.findAllPriority();
        return new ResponseEntity<>(priorityDtoList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<PriorityDto> getPriority(@PathVariable Long id){

        if(!priorityServiceImp.isValidId(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        PriorityDto priorityDto = priorityServiceImp.findPriorityById(id);
        return new ResponseEntity<>(priorityDto, HttpStatus.OK);
    }

    @PostMapping("/addpriority")
    public ResponseEntity<PriorityDto> addPriority(@RequestBody PriorityDto priorityDto){
        PriorityDto priorityAdded = priorityServiceImp.savePriority(priorityDto);
        return new ResponseEntity<>(priorityAdded, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<PriorityDto> updatePriority(@RequestBody PriorityDto priorityDto, @PathVariable Long id){
        if(!priorityServiceImp.isValidId(id)){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        priorityDto.setPriorityID(id);
        PriorityDto priorityDto1 = priorityServiceImp.savePriority(priorityDto);
        return new ResponseEntity<>(priorityDto1, HttpStatus.CREATED);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deletePriority(@PathVariable Long id){
        if (!priorityServiceImp.isValidId(id)){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        priorityServiceImp.deletePriority(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
