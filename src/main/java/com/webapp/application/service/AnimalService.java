package com.webapp.application.service;

import com.webapp.application.model.Animal;

import java.util.List;
import java.util.Optional;

public interface AnimalService {
    public Animal saveAnimal(Animal animal);
    public List<Animal> getAllAnimals();
    public Animal changeAnimalById(Animal animal);
    public Optional<Animal> getAnimalById(Integer id);
    public List<Animal> getAnimalByName(String name);
}
