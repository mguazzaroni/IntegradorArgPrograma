package com.portfolio.backend.Service;

import com.portfolio.backend.Entity.Education;
import com.portfolio.backend.Entity.Experience;
import com.portfolio.backend.Interface.IEducationService;
import com.portfolio.backend.Repository.IEducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class EducationService implements IEducationService {

    @Autowired
    private IEducationRepository _repository;

    @Override
    public List<Education> getEducationList() {
        return _repository.findAll();
    }

    @Override
    public Education getEducationById(Long id) {
        return _repository.getById(id);
    }

    public Optional<Education> findEducationById(Long id){
        return _repository.findById(id);
    }

    @Override
    public void saveEducation(Education education) {
        _repository.save(education);
    }

    @Override
    public void deleteEducation(Long id) {
        _repository.deleteById(id);
    }
}
