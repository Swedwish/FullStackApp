package com.webapp.application.service;

import com.webapp.application.model.Worker;
import com.webapp.application.repository.WorkerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WorkerServiceImpl implements WorkerService{
    @Autowired
    WorkerRepository workerRepository;

    @Override
    public Worker saveWorker(Worker worker) {
        return workerRepository.save(worker);
    }

    @Override
    public List<Worker> getAllWorkers() {
        return workerRepository.findAll();
    }

    @Override
    public Optional<Worker> getWorkerByName(String name) {
        return workerRepository.findByName(name);
    }

    @Override
    public Optional<Worker> getWorkerById(int id) {
        return workerRepository.findById(id);
    }

    @Override
    public void changeSalary(int id, int newSalary){
        workerRepository.findById(id).map(worker -> {
            worker.setSalary(newSalary);
            return worker;
        }).orElseThrow(() -> new RuntimeException("No worker with id ="+ id));
    }

    @Override
    public void promote(int id, String newJobTitle) {

    }

    @Override
    public void fire(int id) {

    }
}
