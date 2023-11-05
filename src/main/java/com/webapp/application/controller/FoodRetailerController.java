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

    @PostMapping("/add")
    public FoodRetailer save(@RequestBody Map<String, Object> data) throws Exception {
        String foodName = (String) data.get("foodName");
        FoodRetailer foodRetailer = new FoodRetailer();
        foodRetailer.setFood(foodService.findFoodByName(foodName)
                .orElseThrow(()-> new Exception("No food with name " + foodName)));
        foodRetailer.setName((String) data.get("name"));
        foodRetailer.setPrice((Integer) data.get("price"));
        return foodRetailerService.saveFoodRetailer(foodRetailer);
    }

    @GetMapping("/getAll")
    public List<FoodRetailer> findAll(){
        return foodRetailerService.findAllFoodRetailers();
    }

    @PutMapping("/changePriceById")
    public void changePriceById(@RequestBody Map<String, Object> data){
        foodRetailerService.changePriceById((Integer)data.get("foodRetailerId"),(Integer)data.get("price"));
    }

    @GetMapping("/findFoodRetailerById")
    public Optional<FoodRetailer> findFoodRetailerById(@RequestBody int foodRetailerId){
        return foodRetailerService.findFoodRetailerById(foodRetailerId);
    }
    @DeleteMapping("/delete")
    public void delete(@RequestBody int foodRetailerId){
        foodRetailerService.delete(foodRetailerId);
    }
}