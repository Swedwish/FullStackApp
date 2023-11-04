package com.webapp.application.repository;

import com.webapp.application.model.Animal;
import com.webapp.application.model.Food;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FoodRepository extends JpaRepository<Food,Integer> {

}
