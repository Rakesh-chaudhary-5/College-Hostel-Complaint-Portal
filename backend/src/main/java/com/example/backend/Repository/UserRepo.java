package com.example.backend.Repository;

import com.example.backend.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepo extends JpaRepository<User, Integer> {
    public User findByEmail(String email);
    public boolean existsByEmail(String email);
}
