package com.webapp.application.service.interfaces;

import com.webapp.application.model.FoodRetailer;

import java.util.List;
import java.util.Optional;

public interface FoodRetailerService {
    FoodRetailer save(FoodRetailer foodRetailer);
    List<FoodRetailer> findAll();
    FoodRetailer changePriceById(int id, int newPrice);
    Optional<FoodRetailer> findById(Integer id);
    void delete(int id);

}
