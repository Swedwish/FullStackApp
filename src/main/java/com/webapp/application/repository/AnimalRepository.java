package com.webapp.application.repository;

import com.webapp.application.model.Animal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AnimalRepository extends JpaRepository<Animal,Integer> {
    //spring JPA will auto generate it
    List<Animal> findByName(String name);
}
