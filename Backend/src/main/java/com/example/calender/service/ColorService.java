package com.example.calender.service;

import com.example.calender.dto.ColorDto;
import com.example.calender.model.Color;

import java.util.List;

public interface ColorService {

    public ColorDto saveColor(ColorDto colorDto);

    public ColorDto findColorById(Long id);

    List<ColorDto> findAllColor();

    ColorDto updateColor(ColorDto colorDto);

    void deleteColor(Long id);

    boolean isValidId( Long id);

}
