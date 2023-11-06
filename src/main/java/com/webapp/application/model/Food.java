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
    private Integer kcalories;

    @Column(name = "is_vegetarian")
    private boolean isVegetarian;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getKcalories() {
        return kcalories;
    }

    public void setKcalories(Integer kcalories) {
        this.kcalories = kcalories;
    }

    public boolean getIsVegetarian() {
        return isVegetarian;
    }

    public void setIsVegetarian(boolean vegetarian) {
        isVegetarian = vegetarian;
    }
}