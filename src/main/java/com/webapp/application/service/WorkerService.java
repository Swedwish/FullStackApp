package com.webapp.application.service;

import com.webapp.application.model.Worker;

import java.util.List;
import java.util.Optional;

public interface WorkerService {
    Worker saveWorker(Worker worker);
    List<Worker> findAllWorkers();
    List<Worker> findWorkerByName(String name);
    Optional<Worker> findWorkerById(int id);
    void changeSalary(int id, int newSalary);
    void promote(int id, String newJobTitle);
    void fire(int id);

}
