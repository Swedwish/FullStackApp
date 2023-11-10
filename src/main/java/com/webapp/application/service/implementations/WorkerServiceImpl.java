package com.webapp.application.service.implementations;

import com.webapp.application.model.Worker;
import com.webapp.application.repository.WorkerRepository;
import com.webapp.application.service.interfaces.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WorkerServiceImpl implements WorkerService {
    @Autowired
    WorkerRepository workerRepository;

    @Override
    public Worker saveWorker(Worker worker) {
        return workerRepository.save(worker);
    }

    @Override
    public List<Worker> findAllWorkers() {
        return workerRepository.findAll();
    }

    @Override
    public List<Worker> findWorkerByName(String name) {
        return workerRepository.findByName(name);
    }

    @Override
    public Optional<Worker> findWorkerById(int id) {
        return workerRepository.findById(id);
    }

    @Override
    public Worker changeSalary(int id, int newSalary) {
        Worker worker = workerRepository.findById(id).orElse(null);

        if (worker != null) {
            // Update the salary
            worker.setSalary(newSalary);

            // Save the updated worker back to the database
            workerRepository.save(worker);
        } else {
            throw new RuntimeException("No worker with id = " + id);
        }
        return worker;
    }

    @Override
    public Worker promote(int id, String newJobTitle) {
        Worker worker = workerRepository.findById(id).orElse(null);

        if (worker != null) {
            // Update the job title
            worker.setJobTitle(newJobTitle);

            // Save the updated worker back to the database
            workerRepository.save(worker);
        } else {
            throw new RuntimeException("No worker with id = " + id);
        }
        return worker;
    }

    @Override
    public void fire(int id) {

    }
}
