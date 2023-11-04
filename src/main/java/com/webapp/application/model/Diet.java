package com.webapp.application.model;

import jakarta.persistence.*;

@Entity
public class Diet {
    @EmbeddedId
    private DietId id;

    private Integer amountKg;

    public Diet() {
    }

    public DietId getId() {
        return id;
    }

    public void setId(DietId id) {
        this.id = id;
    }

    public Integer getAmountKg() {
        return amountKg;
    }

    public void setAmountKg(Integer amountKg) {
        this.amountKg = amountKg;
    }
}

