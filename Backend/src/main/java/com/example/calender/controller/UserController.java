package com.example.calender.controller;



import com.example.calender.dto.UserDto;
import com.example.calender.model.User;
import com.example.calender.service.serviceImp.UserServiceImp;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/calendarwebapp/home/users")
@CrossOrigin
public class UserController {

    @Autowired
    private UserServiceImp userServiceImp;

    @PostMapping("/adduser")
    public ResponseEntity<UserDto> addUser(@RequestBody UserDto userDto){
        UserDto userAdded = userServiceImp.saveUser(userDto);
        return new ResponseEntity<>(userAdded, HttpStatus.CREATED);
    }

    @GetMapping("/{email}")
    public ResponseEntity<UserDto> getUserByEmail(@PathVariable String email){
        if (!userServiceImp.isValidEmail(email)){
            return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
        }
        UserDto userDto = userServiceImp.findUserByEmail(email);
        if (userDto == null){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        userDto.setUserpassword(null);
        System.out.println("UserDto returned: " + userDto);
        return new ResponseEntity<>(userDto, HttpStatus.OK);
    }

    @PostMapping("/validate-password")
    public ResponseEntity<Boolean> validatePassword(@RequestParam String email, @RequestParam String password) {
        if (userServiceImp.isValidPassword(password, email)){
            return new ResponseEntity<>(HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.UNAUTHORIZED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<UserDto> updateUser(@RequestBody UserDto userDto, @PathVariable Long id){
        if(!userServiceImp.isValidId(id)){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        userDto.setUserID(id);
        UserDto userDto1 = userServiceImp.saveUser(userDto);
        return new ResponseEntity<>(userDto1, HttpStatus.CREATED);

    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteUser(@PathVariable Long id){
        if (!userServiceImp.isValidId(id)){
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

        userServiceImp.deleteUser(id);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
