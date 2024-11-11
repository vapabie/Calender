package com.example.calender.service;

import com.example.calender.dto.ColorDto;

import java.util.List;

public interface ColorService {

    ColorDto saveColor(ColorDto colorDto);

    public ColorDto findColorById(Long id);

    List<ColorDto> findAllColor();

    void deleteColor(Long id);

    boolean isValidId( Long id);

}
