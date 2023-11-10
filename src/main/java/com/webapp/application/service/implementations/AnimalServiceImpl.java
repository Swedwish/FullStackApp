package com.webapp.application.service.implementations;

import com.webapp.application.model.Animal;
import com.webapp.application.model.Cell;
import com.webapp.application.repository.AnimalRepository;
import com.webapp.application.repository.CellRepository;
import com.webapp.application.service.interfaces.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;


@Service
public class AnimalServiceImpl implements AnimalService {
    @Autowired
    private AnimalRepository animalRepository;

    @Autowired
    private CellRepository cellRepository;
    @Override
    public Animal save(Animal animal) {
        return animalRepository.save(animal);
    }

    @Override
    public Animal saveAnimalWithOptionalCell(Animal animal, int cellId) {
        Cell cell = cellRepository.findById(cellId).map(celll -> {
            animal.setCell(celll);
            save(animal);
            return celll;
        }).orElse(null);
        if (cell == null){
            cell = new Cell();
            cell.setId(cellId);
            cellRepository.save(cell);
            animal.setCell(cell);
            save(animal);
        }
        return animal;
    }

    @Override
    public List<Animal> findAll() {
        return animalRepository.findAll();
    }

    @Override
    public Animal change(Animal animal) {
        Animal change = animalRepository.getReferenceById(animal.getId());
        change.setCell(animal.getCell());
        change.setGender(animal.getGender());
        change.setName(animal.getName());
        change.setSpecies(animal.getSpecies());
        change.setDateOfBirth(animal.getDateOfBirth());
        return change;
    }

    @Override
    public Optional<Animal> findAnimalById(Integer id) {
        return animalRepository.findById(id);
    }

    @Override
    public Animal moveById(int animalId, int cellId) {
        Animal animal = animalRepository.findById(animalId).orElse(null);

        if (animal != null) {
            // Find the cell by ID
            Cell cellEntity = cellRepository.findById(cellId).orElse(null);

            if (cellEntity != null) {
                // Update the cell for the animal
                animal.setCell(cellEntity);

                // Save the updated animal back to the database
                animalRepository.save(animal);
            } else {
                throw new RuntimeException("No cell with ID "+cellId);
            }
        } else {
            throw new RuntimeException("No animal with ID" + animalId);
        }
        return animal;
    }

    @Override
    public void deleteById(int id) {
        animalRepository.delete(animalRepository.getReferenceById(id));
    }

    @Override
    public List<Animal> findByName(String name) {
        List<Animal> ans = animalRepository.findByName(name);
        return ans;
    }


}
