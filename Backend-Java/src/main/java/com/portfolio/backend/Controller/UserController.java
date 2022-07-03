package com.portfolio.backend.Controller;

import com.portfolio.backend.Entity.User;
import com.portfolio.backend.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class UserController {
    @Autowired
    private UserService _service;

    @GetMapping("/users/all")
    public List<User> getAll(){
        return _service.getUsersList();
    }

    @GetMapping("/users/{id}")
    public User getUser(@PathVariable Long id){
        return _service.findUserById(id);
    }

    @PostMapping("/users/new")
    public String Post(User user){
        try{
            _service.saveUser(user);

            return "El usuario se creo correctamente";
        }
        catch (Exception ex){
            return "Error al crear el usuario " + ex.getMessage();
        }
    }
    @PutMapping("/users/edit/{id}")
    public String Put(@PathVariable Long id,
               @RequestParam("username") String newUserName,
               @RequestParam("userpassword") String newUserPassword){
        try{
            User user = _service.findUserById(id);

            user.setUserName(newUserName);
            user.setUserPassword(newUserPassword);

            return "Se actualizo el usuario correctamente";
        }
        catch (Exception ex){
            return "Error al editar el usuario " + ex.getMessage();
        }
    }
    @DeleteMapping("/users/delete/{id}")
    public String Delete(@PathVariable Long id){
        try{
            _service.deleteUser(id);

            return "Usuario eliminado correctamente";
        }
        catch (Exception ex){
            return "Ocurrio un error al eliminar el usuario " + ex.getMessage();
        }
    }
}
