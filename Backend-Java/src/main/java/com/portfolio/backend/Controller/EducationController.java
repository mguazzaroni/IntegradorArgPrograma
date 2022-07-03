package com.portfolio.backend.Controller;

import com.portfolio.backend.Entity.Education;
import com.portfolio.backend.Service.EducationService;
import org.springframework.beans.factory.annotation.Autowired;
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
    public String Post(@RequestBody Education education){
        try{
            _service.saveEducation(education);

            return "Se guardo la educacion correctamente";
        }
        catch (Exception ex){
            return "Ocurrio un error al guardar la educacion " + ex.getMessage();
        }
    }

    @PutMapping("/education/edit")
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
            return "Se actualizo correctamente";
        }else{
            return "El id proporcinado es incorrecto";
        }
    }

    @DeleteMapping("/education/delete/{id}")
    public String Delete(@PathVariable Long id){
        try{
            _service.deleteEducation(id);

            return "Se elimino correctamente";
        }
        catch (Exception ex){
            return "Ocurrio un error al eliminar " + ex.getMessage();
        }
    }
}
