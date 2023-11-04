package com.webapp.application.model;

import com.webapp.application.model.Animal;
import com.webapp.application.model.DietId;
import jakarta.persistence.*;

import java.io.Serializable;

@Entity
public class Diet {
    @EmbeddedId
    private DietId id;

    @ManyToOne
    @MapsId("animalId")
    @JoinColumn(name = "animal_id")
    private Animal animal;

    @ManyToOne
    @MapsId("foodName")
    @JoinColumn(name = "food_name")
    private Food food;

    private int amountKg;

    public Diet() {
    }

    public DietId getId() {
        return id;
    }

    public void setId(DietId id) {
        this.id = id;
    }

    public Animal getAnimal() {
        return animal;
    }

    public void setAnimal(Animal animal) {
        this.animal = animal;
    }

    public Food getFood() {
        return food;
    }

    public void setFood(Food food) {
        this.food = food;
    }

    public int getAmountKg() {
        return amountKg;
    }

    public void setAmountKg(int amountKg) {
        this.amountKg = amountKg;
    }
}

