package com.example.calender.service.serviceImp;

import com.example.calender.dto.ColorDto;
import com.example.calender.repo.ColorRepo;
import com.example.calender.service.ColorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


@Service
public class ColorServiceImp implements ColorService {

    @Autowired
    private ColorRepo colorRepo;

    @Override
    public ColorDto saveColor(ColorDto colorDto){
        return null;
    }

    @Override
    public ColorDto findById(Integer id){
        return null;
    }

}
