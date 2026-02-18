package com.example.backend.Controller;

import com.example.backend.Model.User;
import com.example.backend.Services.StudentServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class StudentController {

    @Autowired
    StudentServices studentServices;

    @PostMapping("/register")
    public String StudentRegistration(@RequestBody User userData) {
        return studentServices.register(userData);
    }

    @PostMapping("/login")
    public String StudentLogin(@RequestBody User userData) {
        return studentServices.login(userData);
    }
    @GetMapping("/")
    public String Home() {
        return "hallo";
    }

}
