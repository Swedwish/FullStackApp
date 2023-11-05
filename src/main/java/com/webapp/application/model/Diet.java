package com.webapp.application.model;

import jakarta.persistence.*;

@Entity
public class Diet {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @ManyToOne
    @JoinColumn(name = "animal_id")
    private Animal animal;

    @ManyToOne
    @JoinColumn(name = "food_name")
    private Food food;
    private Integer amountKg;

    public Diet() {
    }

    public Integer getAmountKg() {
        return amountKg;
    }

    public void setAmountKg(Integer amountKg) {
        this.amountKg = amountKg;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
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
}

