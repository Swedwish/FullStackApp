package com.webapp.application.controller;

import com.webapp.application.model.Animal;
import com.webapp.application.service.AnimalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/animal")
public class AnimalController {
    @Autowired
    private AnimalService animalService;

//    @PostMapping("/add")
//    public String add(@RequestBody Animal animal){
//        animalService.saveAnimal(animal);
//        return "New animal added";
//    }
    @PostMapping("/add")
    public String add(@RequestBody Animal animal){
        animalService.saveAnimal(animal);
        return "New animal added";
    }

    @GetMapping("/getAll")
    public List<Animal> getAllAnimal(){
        return animalService.getAllAnimals();
    }
}
