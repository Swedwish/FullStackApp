package com.webapp.application.service.interfaces;

import com.webapp.application.model.Worker;

import java.util.List;
import java.util.Optional;

public interface WorkerService {
    Worker saveWorker(Worker worker);
    List<Worker> findAllWorkers();
    List<Worker> findWorkerByName(String name);
    Optional<Worker> findWorkerById(int id);
    Worker changeSalary(int id, int newSalary);
    Worker promote(int id, String newJobTitle);
    void fire(int id);

}
