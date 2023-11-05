package com.webapp.application.service;

import com.webapp.application.model.Animal;

import java.util.List;
import java.util.Optional;

public interface AnimalService {
    public Animal saveAnimal(Animal animal);
    public List<Animal> findAllAnimals();
    public Animal changeAnimal(Animal animal);
    public Optional<Animal> findAnimalById(Integer id);
    public List<Animal> findAnimalByName(String name);
    public void deleteAnimalById(int id);
    public void moveById(int id, int cell);
    public Animal saveAnimalWithOptionalCell(Animal animal, int cellId);
}
