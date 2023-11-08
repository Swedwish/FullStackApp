package com.webapp.application.controller;

import com.webapp.application.model.Diet;
import com.webapp.application.service.AnimalService;
import com.webapp.application.service.DietService;
import com.webapp.application.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;

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
    public Diet save(@RequestBody Map<String, Object> data) throws Exception {
        Diet diet = new Diet();
        diet.setAmountKg(Integer.parseInt((String) data.get("amountKg")));
        diet.setAnimal(animalService.findAnimalById(Integer.parseInt((String)data.get("animalId")))
                .orElseThrow(()-> new Exception("No animal with such id")));
        diet.setFood(foodService.findFoodByName((String) data.get("foodName"))
                .orElseThrow(()-> new Exception("No food with such name")));
        return dietService.saveDiet(diet);
    }
    @GetMapping("/findAll")
    public List<Diet> findAll(){
        return dietService.findAllDiets();
    }

    @GetMapping("/findById")
    public List<Diet> findById(@RequestParam(name = "animalId") String animalIdStr,
                               @RequestParam(name = "foodName") String foodName){
        Integer animalId = Integer.parseInt(Objects.equals(animalIdStr, "") ? "-1" : animalIdStr);
        if (animalId != -1) {
            return dietService.findDietByAnimalId(animalId);
        } else {
            return dietService.findDietByFoodName(foodName);
        }
    }
    @DeleteMapping("/delete/{id}")
    public void deleteDietById(@PathVariable Integer id){
        dietService.deleteDietById(id);
    }

}