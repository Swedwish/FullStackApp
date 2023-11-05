package com.webapp.application.service;

import com.webapp.application.model.Diet;
import com.webapp.application.model.Food;
import com.webapp.application.model.Job;

import java.util.List;

public interface FoodService {
    public Food saveFood(Food food);
    public List<Food> getAllDiets();
    public Food getFoodByName(String name);
    public void deleteFoodByName(String name);
}
