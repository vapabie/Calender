package com.example.calender.service.serviceImp;

import com.example.calender.dto.UserDto;
import com.example.calender.model.User;
import com.example.calender.repo.UserRepo;
import com.example.calender.service.UserService;
import jakarta.persistence.EntityNotFoundException;
import jakarta.validation.constraints.Null;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private ModelMapper modelMapper;

    @Override
    public UserDto saveUser(UserDto userDto) {

        userRepo.save(modelMapper.map(userDto, User.class));
        return userDto;
    }

    public UserDto findUserById(Long id){
        Optional<User> user = userRepo.findById(id);
        UserDto userDto = modelMapper.map(user, UserDto.class);
        if (user.isEmpty()){
            throw new EntityNotFoundException("No User Found With This ID:" +id);
        }else {
            return userDto;
        }
    }


    @Override
    public UserDto findUserByEmail(String email) {
        Optional<User> user = userRepo.findByEmail(email);
        UserDto userDto =modelMapper.map(user, UserDto.class);
        if (user.isEmpty()){
            throw new EntityNotFoundException("No User Found With This ID:" +email);
        }else {
            return userDto;
        }
    }

    @Override
    public void deleteUser(Long id) {
        if (!isValidId(id)){
            throw new EntityNotFoundException("No Event Found With This Id: " + id);
        }
        userRepo.deleteById(id);
    }

    @Override
    public boolean isValidId(Long id) {
        return userRepo.existsById(id);
    }

    @Override
    public boolean isValidEmail(String email) {
        return userRepo.existsByEmail(email);
    }

    @Override
    public boolean isValidPassword( String password, String email){
       String goodPw = findUserByEmail(email).getUserpassword();
        return password.equals(goodPw);
    }

}
