package com.webapp.application.service;

import com.webapp.application.model.Food;

import java.util.List;
import java.util.Optional;

public interface FoodService {
    public Food saveFood(Food food);
    public List<Food> findAllFood();
    public Optional<Food> findFoodByName(String name);
    public void deleteFoodByName(String name);
}
