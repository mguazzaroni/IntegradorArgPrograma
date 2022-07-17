package com.portfolio.backend.Controller;

import com.portfolio.backend.Entity.Education;
import com.portfolio.backend.Service.EducationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class EducationController {

    @Autowired
    private EducationService _service;

    @GetMapping("/education/all")
    public List<Education> GetAll(){
        return _service.getEducationList();
    }

    @PostMapping("/education/new")
    @PreAuthorize("hasRole('ADMIN')")
    public String Post(@RequestBody Education education){
        try{
            _service.saveEducation(education);

            return "Saved";
        }
        catch (Exception ex){
            return "An error has occurred " + ex.getMessage();
        }
    }

    @PutMapping("/education/edit/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public String Put(@PathVariable Long id,
                      @RequestParam String newTitle,
                      @RequestParam String newInstitution,
                      @RequestParam String newStartDate,
                      @RequestParam String newEndDate){

        Education education = _service.getEducationById(id);

        if(education != null) {
            education.setTitle(newTitle);
            education.setInstitution(newInstitution);
            education.setStartDate(newStartDate);
            education.setEndDate(newEndDate);

            return "Updated successfully";

        }else{
            return "User id not found";
        }
    }

    @DeleteMapping("/education/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public String Delete(@PathVariable Long id){
        try{
            _service.deleteEducation(id);

            return "Deleted";
        }
        catch (Exception ex){
            return "An error has occurred " + ex.getMessage();
        }
    }
}
