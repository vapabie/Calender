package com.example.calender.service;

import com.example.calender.dto.UserDto;

public interface UserService {

    UserDto saveUser(UserDto userDto);

    UserDto findUserById(Long id);

    UserDto findUserByEmail(String email);

    void deleteUser(Long id);

    boolean isValidId(Long id);

    boolean isValidEmail( String email);
}
