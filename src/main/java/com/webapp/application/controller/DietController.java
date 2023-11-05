package com.webapp.application.controller;

import com.webapp.application.model.Diet;
import com.webapp.application.service.AnimalService;
import com.webapp.application.service.CellService;
import com.webapp.application.service.DietService;
import com.webapp.application.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/diet")
public class DietController {
    @Autowired
    DietService dietService;
    @Autowired
    AnimalService animalService;
    @Autowired
    FoodService foodService;

    @PostMapping("/add")
    public Diet saveDiet(@RequestBody Map<String, Object> data) throws Exception {
        Diet diet = new Diet();
        diet.setAmountKg((Integer) data.get("amountKg"));
        diet.setAnimal(animalService.findAnimalById((int)data.get("animalId"))
                .orElseThrow(()-> new Exception("No animal with such id")));
        diet.setFood(foodService.findFoodByName((String) data.get("foodName"))
                .orElseThrow(()-> new Exception("No food with such name")));
        return dietService.saveDiet(diet);
    }
    @GetMapping("/findAll")
    public List<Diet> findAllDiets(){
        return dietService.findAllDiets();
    }

    @GetMapping("/findById")
    public Optional<Diet> findById(@RequestBody int dietId){
        return dietService.findDietById(dietId);
    }

    @DeleteMapping("/delete")
    public void deleteDietById(@RequestBody int dietId){
        dietService.deleteDietById(dietId);
    }

}