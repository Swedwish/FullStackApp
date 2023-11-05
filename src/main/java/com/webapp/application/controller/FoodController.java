package com.webapp.application.controller;

import com.webapp.application.model.Food;
import com.webapp.application.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/food")
public class FoodController {
    @Autowired
    FoodService foodService;

    @PostMapping("/add")
    public Food saveFood(@RequestBody Food food){
        return foodService.saveFood(food);
    }

    @GetMapping("/findAll")
    public List<Food> findAll(){
        return foodService.findAllFood();
    }

    @GetMapping("/fundByName")
    public Optional<Food> findByName(@RequestBody String foodName){
        return foodService.findFoodByName(foodName);
    }

    @DeleteMapping("/delete")
    public void delete(@RequestBody String foodName) {
        foodService.deleteFoodByName(foodName);
    }
}
