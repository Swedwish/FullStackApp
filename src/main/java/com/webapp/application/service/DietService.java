package com.webapp.application.service;

import com.webapp.application.model.Diet;

import java.util.List;
import java.util.Optional;

public interface DietService {
    public Diet saveDiet(Diet diet);
    public List<Diet> findAllDiets();
    public Optional<Diet> findDietById(int id);
    public void deleteDietById(int id);
}
