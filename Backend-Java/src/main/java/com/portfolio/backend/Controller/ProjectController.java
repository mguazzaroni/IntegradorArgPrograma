package com.portfolio.backend.Controller;

import com.portfolio.backend.Entity.Project;
import com.portfolio.backend.Service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200/")

public class ProjectController{
    @Autowired
    private ProjectService _service;

    @GetMapping("/projects/all")
    public List<Project> GetAll(){
        return _service.getProjectList();
    }
    @GetMapping("/projects/get/{id}")
    public Project GetProject(@PathVariable Long id){
        return _service.findProjectById(id);
    }
    @PostMapping("/projects/new")
    public String Post(Project project){
        try {
            _service.saveProject(project);

            return "El proyecto se guardo correctamente";
        }
        catch (Exception ex){
            return "Ocurrio un error al agregar un nuevo proyecto " + ex.getMessage();
        }
    }
    @PutMapping("/projects/edit/{id}")
    public String Put(@PathVariable Long id,
                      @RequestParam("name") String newName,
                      @RequestParam("description") String newDescription,
                      @RequestParam("url") String newUrl)
    {
        Project project = _service.findProjectById(id);

        project.setProjectName(newName);
        project.setDescription(newDescription);
        project.setProjectUrl(newUrl);

        return "Se actualizo el proyecto correctamenet";
    }

    @DeleteMapping("/projects/delete/{id}")
    public String Delete(Long id){
        _service.deleteProject(id);

        return "Se elimino el proyecto correctamente";
    }
}
