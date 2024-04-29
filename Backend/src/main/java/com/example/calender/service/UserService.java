package com.example.calender.service;

import com.example.calender.dto.UserDto;

public interface UserService {

    UserDto saveUser(UserDto userDto);

    UserDto findById(Integer id);
}
