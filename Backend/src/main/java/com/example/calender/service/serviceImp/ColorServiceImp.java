package com.example.calender.service.serviceImp;

import com.example.calender.dto.ColorDto;
import com.example.calender.model.Color;
import com.example.calender.repo.ColorRepo;
import com.example.calender.service.ColorService;
import jakarta.persistence.EntityNotFoundException;
import lombok.AllArgsConstructor;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeToken;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
@AllArgsConstructor
public class ColorServiceImp implements ColorService {

    @Autowired
    private ColorRepo colorRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public ColorDto saveColor(ColorDto colorDto){
        colorRepo.save(modelMapper.map(colorDto, Color.class));
        return colorDto;
    }

    @Override
    public ColorDto findColorById(Long  id){
        Optional<Color> color = colorRepo.findById(id);
        ColorDto colorDto = modelMapper.map(color, ColorDto.class);
        if (color.isEmpty()){
            throw new EntityNotFoundException("No Color Found With This ID: " + id);
        }else {
        return colorDto;}
    }
    @Override
    public List<ColorDto> findAllColor() {
        List<Color> colorList = colorRepo.findAll();
        return modelMapper.map(colorList, new TypeToken<List<ColorDto>>(){}.getType());
    }

    @Override
    public void deleteColor(Long id) {

        if (!isValidId(id)){
            throw new EntityNotFoundException("No Color Found With This ID: " + id);
        }
        colorRepo.deleteById(id);

    }

    @Override
    public boolean isValidId(Long id) {
        return colorRepo.existsById(id);
    }
}
