package com.webapp.application.service;

import com.webapp.application.model.FoodRetailer;

import java.util.List;
import java.util.Optional;

public interface FoodRetailerService {
    public FoodRetailer saveFoodRetailer(FoodRetailer foodRetailer);
    public List<FoodRetailer> findAllFoodRetailers();
    public void changePriceById(int id, int newPrice);
    public Optional<FoodRetailer> findFoodRetailerById(Integer id);
    public void delete(int id);

}
