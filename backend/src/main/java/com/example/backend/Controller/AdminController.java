package com.example.backend.Controller;

import com.example.backend.Model.User;
import com.example.backend.Services.AdminServices;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
public class AdminController {
    @Autowired
    AdminServices adminServices;

    @GetMapping("/userData")
    public List<User> StudentData(){
      return adminServices.getUserData();
    }

    @PutMapping("/acceptReq/{id}")
    public String acceptReq(@PathVariable int id){
     return adminServices.acceptUser(id);
    }

    @PutMapping("/rejectReq/{id}")
    public String rejectReq(@PathVariable int id) {
        return adminServices.rejectUser(id);
    }
}
