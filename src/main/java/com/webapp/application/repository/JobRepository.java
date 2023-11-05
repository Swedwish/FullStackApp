package com.webapp.application.repository;

import com.webapp.application.model.Animal;
import com.webapp.application.model.Job;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobRepository extends JpaRepository<Job,Integer> {

    List<Job> findByAnimalId(int animalId);
    List<Job> findByWorkerId(int workerId);
}
