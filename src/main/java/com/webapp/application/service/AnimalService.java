package com.webapp.application.service;

import com.webapp.application.model.Animal;

import java.util.List;
import java.util.Optional;

public interface AnimalService {
    Animal save(Animal animal);
    List<Animal> findAll();
    Animal change(Animal animal);
    Optional<Animal> findAnimalById(Integer id);
    List<Animal> findByName(String name);
    void deleteById(int id);
    Animal moveById(int id, int cell);
    Animal saveAnimalWithOptionalCell(Animal animal, int cellId);
}
