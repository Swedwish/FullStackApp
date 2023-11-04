package com.webapp.application.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Cell {
    @Id
    private int id;
    @Column(name = "size_m3")
    private int sizeM3;
    @Column(name = "average_temperature")
    private int averageTemperature;

    public Cell() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public int getSizeM3() {
        return sizeM3;
    }

    public void setSizeM3(int sizeM3) {
        this.sizeM3 = sizeM3;
    }

    public int getAverageTemperature() {
        return averageTemperature;
    }

    public void setAverageTemperature(int averageTemperature) {
        this.averageTemperature = averageTemperature;
    }
}
