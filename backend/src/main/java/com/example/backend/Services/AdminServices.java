package com.example.backend.Services;

import com.example.backend.Model.Status;
import com.example.backend.Model.User;
import com.example.backend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class AdminServices {

    @Autowired
    UserRepo userRepo;

    public List<User> getUserData() {
        return userRepo.findAll();
    }

    public String acceptUser(int id) {
        User user = userRepo.findById(id).orElseThrow(()-> new RuntimeException("user not found"));
        user.setStatus(Status.ACTIVE);
        userRepo.save(user);
        return "accepted";
    }

    public String rejectUser(int id) {
        User user = userRepo.findById(id).orElseThrow(()-> new RuntimeException("user not found"));
        user.setStatus(Status.REJECTED);
        userRepo.save(user);
        return "rejected successfully";
    }
}
