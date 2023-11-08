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
        return foodRetailerService.save(foodRetailer);
    }

    @GetMapping("/getAll")
    public List<FoodRetailer> findAll(){
        return foodRetailerService.findAll();
    }

    @PutMapping("/changePrice")
    public FoodRetailer changePriceById(@RequestBody Map<String, Object> data){
        return foodRetailerService.changePriceById(Integer.parseInt((String)data.get("id")),Integer.parseInt((String)data.get("price")));
    }

    @GetMapping("/findById/{id}")
    public Optional<FoodRetailer> findById(@PathVariable Integer id){
        return foodRetailerService.findById(id);
    }
    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id){
        foodRetailerService.delete(id);
    }
}