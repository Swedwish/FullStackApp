package com.webapp.application.service;

import com.webapp.application.model.Animal;

import java.util.List;

public interface AnimalService {
    public Animal saveAnimal(Animal animal);
    public List<Animal> getAllAnimals();
}
