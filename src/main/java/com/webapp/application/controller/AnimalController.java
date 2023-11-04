package com.webapp.application.controller;

import com.webapp.application.model.Animal;
import com.webapp.application.model.Cell;
import com.webapp.application.repository.CellRepository;
import com.webapp.application.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/animal")
public class AnimalController {
    @Autowired
    private AnimalService animalService;

    @Autowired
    private CellRepository cellRepository;

    @PostMapping("/add/{cell_id}")
    public String add(@PathVariable(value = "cell_id") int cellId, @RequestBody Animal animal) throws Exception {

        cellRepository.findById(cellId).map(cell -> {

            animal.setCell(cell);
            return animalService.saveAnimal(animal);
        }).orElseThrow(() -> new Exception("Not found Cell with id = " + cellId));
        return "New animal added";
    }

    @GetMapping("/getAll")
    public List<Animal> getAllAnimal() {
        return animalService.getAllAnimals();
    }
}
