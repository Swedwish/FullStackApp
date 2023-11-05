package com.webapp.application.service;

import com.webapp.application.model.Diet;
import com.webapp.application.model.Job;

import java.util.List;

public interface DietService {
    public Diet saveDiet(Diet diet);
    public List<Diet> getAllDiets();
    public Job getDietById(int id);
    public void deleteDietById(int id);
}
