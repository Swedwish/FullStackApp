package com.webapp.application.controller;

import com.webapp.application.model.Worker;
import com.webapp.application.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/worker")
public class WorkerController {
    @Autowired
    WorkerService workerService;

    @PostMapping("/add")
    public Worker addWorker(@RequestBody Worker worker){
        return workerService.saveWorker(worker);
    }

    @GetMapping("/findAll")
    public List<Worker> findAllWorkers(){
        return workerService.findAllWorkers();
    }

    @GetMapping("/findByName")
    public List<Worker> findWorkerByName(@RequestBody String workerName){
        return workerService.findWorkerByName(workerName);
    }

    @GetMapping("/findById")
    public  Optional<Worker> findWorkerById(@RequestBody Integer workerId){
        return workerService.findWorkerById(workerId);
    }

    @PutMapping("/changeSalary")
    public void changeSalary(@RequestBody Map<String, Object> data){
        workerService.changeSalary((Integer)data.get("workerId"), (Integer)data.get("salary"));
    }

    @PutMapping("/promote")
    public void promote(@RequestBody Map<String, Object> data){
        workerService.promote((Integer) data.get("workerId"), (String) data.get("jobTitle"));
    }

    @DeleteMapping("/delete")
    public void delete(@RequestBody Integer workerId){
        workerService.fire(workerId);
    }

}