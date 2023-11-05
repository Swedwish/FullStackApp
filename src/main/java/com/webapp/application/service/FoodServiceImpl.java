package com.webapp.application.service;

import com.webapp.application.model.Cell;
import com.webapp.application.model.Diet;
import com.webapp.application.model.Food;
import com.webapp.application.model.Job;
import com.webapp.application.repository.CellRepository;
import com.webapp.application.repository.DietRepository;
import com.webapp.application.repository.FoodRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodServiceImpl implements FoodService{
    @Autowired
    FoodRepository foodRepository;

    @Override
    public Food saveFood(Food food) {
        return foodRepository.save(food);
    }

    @Override
    public List<Food> findAllFood() {
        return foodRepository.findAll();
    }

    @Override
    public Optional<Food> findFoodByName(String name) {
        return foodRepository.findByName(name);
    }

    @Override
    public void deleteFoodByName(String name) {
        foodRepository.findByName(name).map(food -> {
            foodRepository.delete(food);
            return null;
        });
    }
}
