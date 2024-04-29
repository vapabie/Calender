package com.example.calender.service;

import com.example.calender.dto.ColorDto;

public interface ColorService {

    ColorDto saveColor(ColorDto colorDto);

    ColorDto findById(Integer id);
}
