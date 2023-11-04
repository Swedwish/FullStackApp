package com.webapp.application.model;

import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import com.webapp.application.Deserializers.CustomAnimalDeserializer;
import jakarta.persistence.*;

import java.sql.Date;

@Entity
//@JsonDeserialize(using = CustomAnimalDeserializer.class)
public class Animal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String species;
    @Column(name = "date_of_birth")
    private Date dateOfBirth;
    private String gender;

    @ManyToOne
    @JoinColumn(name = "cell_id")
    private Cell cell;
    public Cell getCell() {
        return cell;
    }

    public void setCell(Cell cell) {
        this.cell = cell;
    }
    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSpecies() {
        return species;
    }

    public void setSpecies(String species) {
        this.species = species;
    }

    public Date getDateOfBirth() {
        return dateOfBirth;
    }

    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public Animal(){
    }
}
