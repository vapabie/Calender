package com.example.calender.controller;

import com.example.calender.dto.ColorDto;
import com.example.calender.service.serviceImp.ColorServiceImp;
import com.example.calender.service.serviceImp.RewardServiceImp;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/calendarwebapp/home/admin/colors")
@AllArgsConstructor
public class ColorController {

    @Autowired
    private ColorServiceImp colorServiceImp;



   @GetMapping("")
   public ResponseEntity<List<ColorDto>> getAllColor(){
       List<ColorDto> colorDtoList = colorServiceImp.findAllColor();
       return new ResponseEntity<>(colorDtoList, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ColorDto> getColor(@PathVariable Long id){

        if(!colorServiceImp.isValidId(id)) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        ColorDto colorDto = colorServiceImp.findColorById(id);
        return new ResponseEntity<>(colorDto, HttpStatus.OK);
    }

    @PostMapping("/addcolor")
    public ResponseEntity<ColorDto> addColor(@RequestBody ColorDto colorDto){
        ColorDto colorAdded = colorServiceImp.saveColor(colorDto);
        return new ResponseEntity<>(colorAdded, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<ColorDto> updateColor(@RequestBody ColorDto colorDto, @PathVariable Long id){
       if(!colorServiceImp.isValidId(id)){
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
       }
       colorDto.setColorID(id);
       ColorDto colorDto1 = colorServiceImp.saveColor(colorDto);
       return new ResponseEntity<>(colorDto1, HttpStatus.CREATED);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteColor(@PathVariable Long id){
       if (!colorServiceImp.isValidId(id)){
           return new ResponseEntity<>(HttpStatus.NOT_FOUND);
       }

       colorServiceImp.deleteColor(id);
       return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
