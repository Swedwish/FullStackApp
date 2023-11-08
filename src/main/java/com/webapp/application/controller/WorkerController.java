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
    public Worker add(@RequestBody Worker worker){
        return workerService.saveWorker(worker);
    }

    @GetMapping("/findAll")
    public List<Worker> findAll(){
        return workerService.findAllWorkers();
    }

    @GetMapping("/findByName/{workerName}")
    public List<Worker> findByName(@PathVariable String workerName){
        return workerService.findWorkerByName(workerName);
    }

    @GetMapping("/findById")
    public  Optional<Worker> findById(@RequestBody Integer workerId){
        return workerService.findWorkerById(workerId);
    }

    @PutMapping("/changeSalary")
    public void changeSalary(@RequestBody Map<String, Object> data){
        workerService.changeSalary(Integer.parseInt((String)data.get("workerId")), Integer.parseInt((String)data.get("salary")));
    }

    @PutMapping("/promote")
    public void promote(@RequestBody Map<String, Object> data){
        workerService.promote(Integer.parseInt((String)data.get("workerId")), (String) data.get("jobTitle"));
    }

    @DeleteMapping("/delete/{id}")
    public void delete(@PathVariable Integer id){
        workerService.fire(id);
    }

}