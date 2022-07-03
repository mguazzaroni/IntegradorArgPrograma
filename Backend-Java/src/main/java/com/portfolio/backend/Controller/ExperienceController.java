package com.portfolio.backend.Controller;

import com.portfolio.backend.Entity.Experience;
import com.portfolio.backend.Service.ExperienceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")

public class ExperienceController {
    @Autowired
    private ExperienceService _service;

    @GetMapping("/experience/all")
    public List<Experience> getAll(){
        return _service.getExperienceList();
    }
    /*@GetMapping("/experience/get/{id}")
    public Experience getExperience(@PathVariable Long id){
        try{
            return _service.
        }
    }*/
    @PostMapping("/experience/new")
    public String Post(@RequestBody Experience experience){
        try{
            _service.saveExperience(experience);
            return "La nueva experiencia se guardo correctamente";
        }
        catch (Exception ex){
            return "Ocurrio un error al guardar la experiencia " + ex.getMessage();
        }
    }

    @PutMapping("/experience/edit/{id}")
    public String Put(@PathVariable Long id,
                      @RequestParam("companyName") String newCompanyName,
                      @RequestParam("description") String newDescription,
                      @RequestParam("startDate") String newStartDate,
                      @RequestParam("endDate") String newEndDate){

        Experience experience = _service.getExperienceById(id);

        if(experience != null){
            //Si encuentra por id, lo actualizo
            experience.setCompanyName(newCompanyName);
            experience.setDescription(newDescription);
            experience.setStartDate(newStartDate);
            experience.setEndDate(newEndDate);
            return "La experiencia se actualizo correctamente";
        }else{
            return "No se encuentra experiencia con el id: " + id;
        }

    }
    @DeleteMapping("/experience/delete/{id}")
    public String Delete(@PathVariable Long id){
        try {
            _service.deleteExperience(id);
            return "Se elimino correctamente";
        }
        catch (Exception ex){
            return "Ocurrio un error al eliminar " + ex.getMessage();
        }
    }
}
