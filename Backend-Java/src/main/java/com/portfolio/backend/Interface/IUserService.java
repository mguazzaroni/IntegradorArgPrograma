package com.portfolio.backend.Interface;

import com.portfolio.backend.Entity.User;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IUserService {
    public List<User> getUsersList();
    public void saveUser(User user);
    public void deleteUser(Long id);
    public User findUserById(Long id);
}
