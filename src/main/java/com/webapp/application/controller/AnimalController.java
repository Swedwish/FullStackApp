package com.webapp.application.controller;

import com.webapp.application.model.Animal;
import com.webapp.application.service.AnimalService;
import com.webapp.application.service.CellService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/animal")
public class AnimalController {
    @Autowired
    private AnimalService animalService;
    @Autowired
    private CellService cellService;

    @PostMapping("/add/{cellId}")
    public Animal addAnimal(@PathVariable int cellId, @RequestBody Animal animal) throws Exception {
        return animalService.saveAnimalWithOptionalCell(animal,cellId);
    }

    @GetMapping("/getByName/{animalName}")
    public List<Animal> getAnimalByName(@PathVariable String animalName){
        return animalService.findAnimalByName(animalName);
    }

    @GetMapping("/getAll")
    public List<Animal> getAllAnimal() {
        return animalService.findAllAnimals();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteAnimalById (@PathVariable int id){
        animalService.deleteAnimalById(id);
    }

    @PutMapping("/moveAnimal")
    public void moveById(@RequestBody Map<String, Object> requestBody){
        int id = Integer.parseInt((String) requestBody.get("animalId"));
        int cell = Integer.parseInt((String) requestBody.get("cellId"));
        animalService.moveById(id,cell);
    }
}
