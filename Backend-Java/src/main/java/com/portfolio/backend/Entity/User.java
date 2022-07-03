package com.portfolio.backend.Entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Getter @Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "userName")
    @NotNull
    private String UserName;

    @Column(name ="Password")
    @NotNull
    private String UserPassword;
}
