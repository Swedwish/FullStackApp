package com.webapp.application.service.implementations;

import com.webapp.application.model.Food;
import com.webapp.application.repository.FoodRepository;
import com.webapp.application.service.interfaces.FoodService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodServiceImpl implements FoodService {
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
