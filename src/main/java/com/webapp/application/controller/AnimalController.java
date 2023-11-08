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
    public Animal add(@PathVariable int cellId, @RequestBody Animal animal) throws Exception {
        return animalService.saveAnimalWithOptionalCell(animal,cellId);
    }

    @GetMapping("/findByName/{animalName}")
    public List<Animal> getByName(@PathVariable String animalName){
        return animalService.findByName(animalName);
    }

    @GetMapping("/findAll")
    public List<Animal> getAll() {
        return animalService.findAll();
    }

    @DeleteMapping("/delete/{id}")
    public void deleteById(@PathVariable int id){
        animalService.deleteById(id);
    }

    @PutMapping("/moveAnimal")
    public Animal moveById(@RequestBody Map<String, Object> data){
        Integer id = Integer.parseInt((String) data.get("id"));
        Integer cell = Integer.parseInt((String) data.get("cellId"));
        return animalService.moveById(id,cell);
    }
}
