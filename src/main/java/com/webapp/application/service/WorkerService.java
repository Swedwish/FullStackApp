package com.webapp.application.service;

import com.webapp.application.model.Worker;

import java.util.List;
import java.util.Optional;

public interface WorkerService {
    public Worker saveWorker(Worker worker);
    public List<Worker> findAllWorkers();
    public Optional<Worker> findWorkerByName(String name);
    public Optional<Worker> findWorkerById(int id);
    public void changeSalary(int id, int newSalary);
    public void promote(int id, String newJobTitle);
    public void fire(int id);

}
