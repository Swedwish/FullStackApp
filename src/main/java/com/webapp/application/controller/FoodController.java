package com.webapp.application.controller;

import com.webapp.application.model.Food;
import com.webapp.application.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
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

    @GetMapping("/findByName/{foodName}")
    public Optional<Food> findByName(@PathVariable String foodName){
        return foodService.findFoodByName(foodName);
    }

    @DeleteMapping("/delete/{name}")
    public void delete(@PathVariable String name) {
        foodService.deleteFoodByName(name);
    }
}
