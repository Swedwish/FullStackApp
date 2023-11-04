package com.webapp.application.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Cell {
    @Id
    private int id;
    @Column(name = "size_m3")
    private Integer sizeM3;
    @Column(name = "average_temperature")
    private Integer averageTemperature;

    public Cell() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Integer getSizeM3() {
        return sizeM3;
    }

    public void setSizeM3(Integer sizeM3) {
        this.sizeM3 = sizeM3;
    }

    public Integer getAverageTemperature() {
        return averageTemperature;
    }

    public void setAverageTemperature(Integer averageTemperature) {
        this.averageTemperature = averageTemperature;
    }
}
