package com.webapp.application.repository;

import com.webapp.application.model.Animal;
import com.webapp.application.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FoodRepository extends JpaRepository<Food,Integer> {

    Optional<Food> findByName(String name);
}
