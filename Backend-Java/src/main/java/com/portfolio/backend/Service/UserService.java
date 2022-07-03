package com.portfolio.backend.Service;

import com.portfolio.backend.Entity.User;
import com.portfolio.backend.Interface.IUserService;
import com.portfolio.backend.Repository.IUserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService implements IUserService {

    @Autowired
    private IUserRepository _repository;

    @Override
    public List<User> getUsersList() {
        return _repository.findAll();
    }

    @Override
    public void saveUser(User user) {
        _repository.save(user);
    }

    @Override
    public void deleteUser(Long id) {
        _repository.deleteById(id);
    }

    @Override
    public User findUserById(Long id) {
        return _repository.getById(id);
    }
}
