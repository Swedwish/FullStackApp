package com.webapp.application.service;

import com.webapp.application.model.Animal;
import com.webapp.application.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AnimalServiceImpl implements AnimalService{
    @Autowired
    private AnimalRepository animalsRepository;

    @Override
    public Animal saveAnimal(Animal animal) {
        return animalsRepository.save(animal);
    }

    @Override
    public List<Animal> getAllAnimals() {
        return animalsRepository.findAll();
    }
}
