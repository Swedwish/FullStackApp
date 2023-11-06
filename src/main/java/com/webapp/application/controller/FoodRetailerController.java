package com.webapp.application.controller;

import com.webapp.application.model.FoodRetailer;
import com.webapp.application.service.FoodRetailerService;
import com.webapp.application.service.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/foodRetailer")
public class FoodRetailerController {

    @Autowired
    FoodService foodService;
    @Autowired
    FoodRetailerService foodRetailerService;

    @PostMapping("/add/{foodName}")
    public FoodRetailer save(@PathVariable String foodName, @RequestBody FoodRetailer foodRetailer) {
        foodRetailer.setFood(foodService.findFoodByName(foodName).orElseThrow(()->new RuntimeException("No food with name" + foodName)));
        return foodRetailerService.saveFoodRetailer(foodRetailer);
    }

    @GetMapping("/getAll")
    public List<FoodRetailer> findAll(){
        return foodRetailerService.findAllFoodRetailers();
    }

    @PutMapping("/changePriceById")
    public void changePriceById(@RequestBody Map<String, Object> data){
        foodRetailerService.changePriceById(Integer.parseInt((String)data.get("foodRetailerId")),Integer.parseInt((String)data.get("price")));
    }

    @GetMapping("/findFoodRetailerById")
    public Optional<FoodRetailer> findFoodRetailerById(@RequestBody Integer foodRetailerId){
        return foodRetailerService.findFoodRetailerById(foodRetailerId);
    }
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id){
        foodRetailerService.delete(id);
    }
}