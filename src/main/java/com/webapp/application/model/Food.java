package com.webapp.application.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Food {
    @Id
    @Column(name = "name")
    private String name;

    @Column(name = "kcalories")
    private int kcalories;

    @Column(name = "is_vegetarian")
    private boolean isVegetarian;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getKcalories() {
        return kcalories;
    }

    public void setKcalories(int kcalories) {
        this.kcalories = kcalories;
    }

    public boolean isVegetarian() {
        return isVegetarian;
    }

    public void setVegetarian(boolean vegetarian) {
        isVegetarian = vegetarian;
    }
}