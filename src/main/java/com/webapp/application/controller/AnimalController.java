package com.webapp.application.controller;

import com.webapp.application.model.Animal;
import com.webapp.application.model.Cell;
import com.webapp.application.repository.CellRepository;
import com.webapp.application.service.AnimalService;
import com.webapp.application.service.CellService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/animal")
public class AnimalController {
    @Autowired
    private AnimalService animalService;

    private CellService cellService;
    @Autowired
    //private CellRepository cellRepository;

    @PostMapping("/add/{cell_id}")
    public String add(@PathVariable(value = "cell_id") int cellId, @RequestBody Animal animal) throws Exception {
        cellService.getCellById(cellId).map(cell -> {
            animal.setCell(cell);
            return animalService.saveAnimal(animal);
        }).orElseThrow(() -> new Exception("Not found Cell with id = " + cellId));
        return "New animal added";
    }

    @GetMapping("/getByName")
    public List<Animal> getAnimalByName(String name){
        return animalService.getAnimalByName(name);
    }

    @GetMapping("/getAll")
    public List<Animal> getAllAnimal() {
        return animalService.getAllAnimals();
    }
}
