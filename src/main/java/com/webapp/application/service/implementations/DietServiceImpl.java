package com.webapp.application.service.implementations;

import com.webapp.application.model.Diet;
import com.webapp.application.repository.AnimalRepository;
import com.webapp.application.repository.DietRepository;
import com.webapp.application.service.interfaces.DietService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class DietServiceImpl implements DietService {
    @Autowired
    DietRepository dietRepository;
    @Autowired
    AnimalRepository animalRepository;

    @Override
    public List<Diet> findDietByFoodName(String foodName) {
        return dietRepository.findByFoodName(foodName);
    }

    @Override
    public Diet saveDiet(Diet diet) {
        return dietRepository.save(diet);
    }

    @Override
    public List<Diet> findAllDiets() {
        return dietRepository.findAll();
    }

    @Override
    public List<Diet> findDietByAnimalId(int id) {
        return dietRepository.findByAnimalId(id);
    }

    @Override
    public void deleteDietById(int id) {
        dietRepository.findById(id).map(diet -> {
            dietRepository.delete(diet);
            return null;
        });
    }
}
