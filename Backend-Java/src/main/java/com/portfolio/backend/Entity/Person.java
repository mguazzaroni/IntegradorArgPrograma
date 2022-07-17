package com.portfolio.backend.Entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Getter @Setter
public class Person {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column()
    private Long Id;

    @Column(name = "Name")
    @NotNull
    private String Name;

    @Column(name = "Surname")
    @NotNull
    private String Surname;

    @Column(name = "Description")
    @NotNull
    private String Description;

    @Column(name = "Profession")
    @NotNull
    private String Profession;

    @Column(name = "Image")
    private String Image;

}
