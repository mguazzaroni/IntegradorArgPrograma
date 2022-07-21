package com.portfolio.backend.Service;

import com.portfolio.backend.Entity.Experience;
import com.portfolio.backend.Interface.IExperienceService;
import com.portfolio.backend.Repository.IExperienceRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ExperienceService implements IExperienceService {

    @Autowired
    private IExperienceRepository _repository;

    @Override
    public List<Experience> getExperienceList() {
        return _repository.findAll();
    }

    @Override
    public Experience getExperienceById(Long id){
        return _repository.getById(id);
    }

    public Optional<Experience> findExperienceById(Long id){
        return _repository.findById(id);
    }
    @Override
    public void saveExperience(Experience experience) {
        _repository.save(experience);
    }

    @Override
    public void deleteExperience(Long id) {
        _repository.deleteById(id);
    }
}
