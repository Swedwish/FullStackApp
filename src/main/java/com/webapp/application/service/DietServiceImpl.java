package com.webapp.application.service;

import com.webapp.application.model.Cell;
import com.webapp.application.model.Diet;
import com.webapp.application.model.Job;
import com.webapp.application.repository.CellRepository;
import com.webapp.application.repository.DietRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class DietServiceImpl implements DietService{
    @Autowired
    DietRepository dietRepository;

    @Override
    public Diet saveDiet(Diet diet) {
        return dietRepository.save(diet);
    }

    @Override
    public List<Diet> getAllDiets() {
        return dietRepository.findAll();
    }

    @Override
    public Optional<Diet> getDietById(int id) {
        return dietRepository.findById(id);
    }

    @Override
    public void deleteDietById(int id) {
        dietRepository.findById(id).map(diet -> {
            dietRepository.delete(diet);
            return null;
        });
    }
}
