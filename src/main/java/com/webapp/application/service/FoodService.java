package com.webapp.application.service;

import com.webapp.application.model.Diet;
import com.webapp.application.model.Food;
import com.webapp.application.model.Job;

import java.util.List;
import java.util.Optional;

public interface FoodService {
    public Food saveFood(Food food);
    public List<Food> getAllFood();
    public Optional<Food> getFoodByName(String name);
    public void deleteFoodByName(String name);
}
