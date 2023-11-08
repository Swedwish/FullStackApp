package com.webapp.application.service;

import com.webapp.application.model.*;
import com.webapp.application.repository.FoodRetailerRepository;
import org.hibernate.sql.exec.ExecutionException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class FoodRetailerServiceImpl implements FoodRetailerService{
    @Autowired
    FoodRetailerRepository foodRetailerRepository;

    @Override
    public FoodRetailer save(FoodRetailer foodRetailer) {
        return foodRetailerRepository.save(foodRetailer);
    }

    @Override
    public List<FoodRetailer> findAll() {
        return foodRetailerRepository.findAll();
    }
    @Override
    public FoodRetailer changePriceById(int id, int newPrice) {
        // Find the food retailer by ID
        FoodRetailer foodRetailer = foodRetailerRepository.findById(id).orElse(null);

        if (foodRetailer != null) {
            // Update the price
            foodRetailer.setPrice(newPrice);

            // Save the updated food retailer back to the database
            foodRetailerRepository.save(foodRetailer);
        } else {
            throw new RuntimeException("No food retailer with such ID");
        }
        return foodRetailer;
    }

    @Override
    public void delete(int id) {
        foodRetailerRepository.delete(foodRetailerRepository.findById(id)
                .orElseThrow(()-> new ExecutionException("No Food Retailer with id " + id)));
    }

    @Override
    public Optional<FoodRetailer> findById(Integer id) {
        return foodRetailerRepository.findById(id);
    }
}
