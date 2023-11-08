package com.webapp.application.service;

import com.webapp.application.model.Diet;

import java.util.List;

public interface DietService {
    List<Diet> findDietByFoodName(String foodName);
    Diet saveDiet(Diet diet);
    List<Diet> findAllDiets();
    List<Diet> findDietByAnimalId(int id);
    void deleteDietById(int id);
}
