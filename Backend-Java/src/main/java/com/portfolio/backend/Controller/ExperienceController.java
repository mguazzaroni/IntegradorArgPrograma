package com.portfolio.backend.Controller;

import com.portfolio.backend.Entity.Experience;
import com.portfolio.backend.Service.ExperienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")

public class ExperienceController {
    @Autowired
    private ExperienceService _service;

    @GetMapping("/experience/all")
    public List<Experience> getAll(){
        return _service.getExperienceList();
    }
    @GetMapping("/experience/get/{id}")
    public Optional<Experience> getExperience(@PathVariable Long id){

       return _service.findExperienceById(id);
    }
    @PostMapping("/experience/new")
   //  @PreAuthorize("hasRole('ADMIN')")
    public String Post(@RequestBody Experience experience){
        try{
            _service.saveExperience(experience);
            return "Saved";
        }
        catch (Exception ex){
            return "An error has occurred " + ex.getMessage();
        }
    }

    @PutMapping("/experience/update/{id}")
    // @PreAuthorize("hasRole('ADMIN')")
    public String Put(@PathVariable Long id, @RequestBody Experience experience){

        _service.getExperienceById(id);

        if(experience != null){
            //Si encuentra por id, lo actualizo
            experience.setCompanyName(experience.getCompanyName());
            experience.setDescription(experience.getDescription());
            experience.setStartDate(experience.getStartDate());
            experience.setEndDate(experience.getEndDate());

            return "Updated successfully";

        }else{
            return "User id not found";
        }

    }
    @DeleteMapping("/experience/delete/{id}")
    // @PreAuthorize("hasRole('ADMIN')")
    public String Delete(@PathVariable Long id){
        try {
            _service.deleteExperience(id);
            return "Deleted";
        }
        catch (Exception ex){
            return "An error has occurred " + ex.getMessage();
        }
    }
}
