package com.portfolio.backend.Service;

import com.portfolio.backend.Entity.Person;

import java.util.List;

public interface IPersonService {
    //Traer una lista de personas
    public List<Person> getPersonList();

    //Guardar una persona
    public void savePerson(Person person);

    //Eliminar una persona por id
    public void deletePerson(Long id);

    //Buscar persona por id
    public Person findPersonById(Long id);
}
