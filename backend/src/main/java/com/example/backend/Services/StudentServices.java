package com.example.backend.Services;

import com.example.backend.Model.Status;
import com.example.backend.Model.User;
import com.example.backend.Repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class StudentServices {

     @Autowired
     UserRepo userRepo;

     private BCryptPasswordEncoder encoder = new BCryptPasswordEncoder(12);

    public String register(User userData) {
        User existingUser = userRepo.findByEmail(userData.getEmail());

        if(existingUser!=null){

            if(existingUser.getStatus()==Status.ACTIVE){
                return "Email already registered. Please login.";
            }
            else if(existingUser.getStatus() == Status.PENDING) {
                return "Your application is already pending approval.";
            }
            else if (existingUser.getStatus() == Status.REJECTED) {
                existingUser.setName(userData.getName());
                existingUser.setPassword(encoder.encode(userData.getPassword()));
                existingUser.setStatus(Status.PENDING);
                existingUser.setRole("student");
                existingUser.setBirthDate(userData.getBirthDate());
                existingUser.setDepartment(userData.getDepartment());
                existingUser.setRoomNo(userData.getRoomNo());
                existingUser.setIdCardNumber(userData.getIdCardNumber());
                existingUser.setMobileNumber(userData.getMobileNumber());
                userRepo.save(existingUser);
                return "Re-application submitted successfully. Waiting for Admin approval.";            }
        }
        if(userRepo.existsByIdCardNumber(userData.getIdCardNumber())){
            return "The ID_CARD NUMBER ALREADY EXISTS";
        }
            try{
                userData.setPassword(encoder.encode(userData.getPassword()));
                userData.setStatus(Status.PENDING);
                userData.setRole("student");
                userRepo.save(userData);
                return "Registration Successful. Waiting for Admin Approval.";
            }catch (Exception e) {
                return "Registration Failed" + e;
            }
    }

    public String login(User userData) {
        User ExistingStudent = userRepo.findByEmail(userData.getEmail());

        if(ExistingStudent == null){
            return "User Not Found";
        }
        boolean isPasswordMatch = encoder.matches(userData.getPassword(), ExistingStudent.getPassword());

        if(!isPasswordMatch) {
            return "Invalid Password";
        }else if(ExistingStudent.getStatus() == Status.PENDING){
            return "Account Not Approved yet!";
        } else if (ExistingStudent.getStatus() == Status.REJECTED){
            return "Account Rejected!";
        }else {
            return "Login Successful";
        }

    }
}
