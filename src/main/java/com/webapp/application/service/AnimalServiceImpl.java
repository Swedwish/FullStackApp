package com.webapp.application.service;

import com.webapp.application.model.Animal;
import com.webapp.application.repository.AnimalRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AnimalServiceImpl implements AnimalService{
    @Autowired
    private AnimalRepository animalRepository;

    @Override
    public Animal saveAnimal(Animal animal) {
        return animalRepository.save(animal);
    }

    @Override
    public List<Animal> getAllAnimals() {
        return animalRepository.findAll();
    }

    @Override
    public Animal changeAnimalById(Animal animal) {
        Animal change = animalRepository.getReferenceById(animal.getId());
        change.setCell(animal.getCell());
        change.setGender(animal.getGender());
        change.setName(animal.getName());
        change.setSpecies(animal.getSpecies());
        change.setDateOfBirth(animal.getDateOfBirth());
        return change;
    }

    @Override
    public Optional<Animal> getAnimalById(Integer id) {
        return animalRepository.findById(id);
    }

    @Override
    public List<Animal> getAnimalByName(String name) {
        return animalRepository.findByName(name);
    }


}
