package com.portfolio.backend.Controller;

import com.portfolio.backend.Entity.Person;
import com.portfolio.backend.Interface.IPersonService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
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
    @PreAuthorize("hasRole('ADMIN')")
    public String Post(@RequestBody Person person){
        try{
            _service.savePerson(person);

            return "Created";
        }
        catch (Exception ex){
            return ex.getMessage();
        }
    }

    @PutMapping("/persons/update/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public String Put(@PathVariable Long id,
                      @RequestParam("name") String newName,
                      @RequestParam("surname") String newSurname,
                      @RequestParam("profession") String newProfession,
                      @RequestParam("image") String newImage)
    {
        try{
            Person person = _service.findPersonById(id);

            person.setName(newName);
            person.setSurname(newSurname);
            person.setProfession(newProfession);
            person.setImage(newImage);

            _service.savePerson(person);

            return "Updated successfully";
        } catch (Exception ex){
            return ex.getMessage();
        }
    }
    @DeleteMapping("persons/delete/{id}")
    @PreAuthorize("hasRole('ADMIN')")
    public String Delete(@PathVariable Long id){
        try{
            _service.deletePerson(id);

            return "Deleted";
        }
        catch (Exception ex){
            return "An error has occurred " + ex.getMessage();
        }
    }
}
