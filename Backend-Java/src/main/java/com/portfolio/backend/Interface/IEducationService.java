package com.portfolio.backend.Interface;

import com.portfolio.backend.Entity.Education;
import com.portfolio.backend.Repository.IEducationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface IEducationService{
    public List<Education> getEducationList();
    public Education getEducationById(Long id);
    public void saveEducation(Education education);
    public void deleteEducation(Long id);
}
