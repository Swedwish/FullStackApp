package com.webapp.application.repository;

import com.webapp.application.model.Animal;
import com.webapp.application.model.Worker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface WorkerRepository extends JpaRepository<Worker,Integer> {
    Optional<Worker> findByName(String name);
}
