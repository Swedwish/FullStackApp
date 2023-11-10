package com.webapp.application.service.interfaces;

import com.webapp.application.model.Food;

import java.util.List;
import java.util.Optional;

public interface FoodService {
    Food saveFood(Food food);
    List<Food> findAllFood();
    Optional<Food> findFoodByName(String name);
    void deleteFoodByName(String name);
}
