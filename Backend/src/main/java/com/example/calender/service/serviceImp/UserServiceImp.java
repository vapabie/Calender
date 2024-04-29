package com.example.calender.service.serviceImp;

import com.example.calender.dto.UserDto;
import com.example.calender.repo.UserRepo;
import com.example.calender.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImp implements UserService {

    @Autowired
    private UserRepo userRepo;

    @Override
    public UserDto saveUser(UserDto userDto) {
        return null;
    }

    public UserDto findById(Integer id){return null;}
}
