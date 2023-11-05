package com.webapp.application.service;

import com.webapp.application.model.Diet;
import com.webapp.application.model.Job;

import java.util.List;
import java.util.Optional;

public interface DietService {
    public Diet saveDiet(Diet diet);
    public List<Diet> getAllDiets();
    public Optional<Diet> getDietById(int id);
    public void deleteDietById(int id);
}
