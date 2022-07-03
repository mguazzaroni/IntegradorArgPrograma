package com.portfolio.backend.Controller;

import com.portfolio.backend.Entity.Person;
import com.portfolio.backend.Interface.IPersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class PersonController {
    @Autowired
    private IPersonService _service;

    @GetMapping("/persons/all")
    public List<Person> GetAll(){
        return _service.getPersonList();
    }
    @GetMapping("/persons/get/profile")
    public Person GetProfile(){
        return _service.findPersonById((long) 1);
    }
    @PostMapping("/persons/new")
    public String Post(@RequestBody Person person){
        try{
            _service.savePerson(person);
            return "Persona creada correctamente";
        }
        catch (Exception err){
            return err.getMessage();
        }
    }

    @PutMapping("/persons/edit/{id}")
    public String Put(@PathVariable Long id,
                      @RequestParam("name") String newName,
                      @RequestParam("surname") String newSurname,
                      @RequestParam("image") String newImage)
    {
        Person person = _service.findPersonById(id);

        person.setName(newName);
        person.setSurname(newSurname);
        person.setImage(newImage);

        _service.savePerson(person);

        return "Persona actualizada correctamente";
    }
    @DeleteMapping("persons/delete/{id}")
    public String Delete(@PathVariable Long id){
        try{
            _service.deletePerson(id);

            return "la persona se elimino correctamente";
        }
        catch (Exception err){
            return err.getMessage();
        }
    }
}
