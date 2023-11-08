package com.webapp.application.controller;

import com.webapp.application.model.Diet;
import com.webapp.application.model.Job;
import com.webapp.application.service.AnimalService;
import com.webapp.application.service.JobService;
import com.webapp.application.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
import java.util.Objects;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/job")
public class JobController {

    @Autowired
    JobService jobService;
    @Autowired
    AnimalService animalService;
    @Autowired
    WorkerService workerService;

    @PostMapping("/add")
    public Job saveJob(@RequestBody Map<String , Object> data) throws Exception {
        Job job = new Job();
        job.setJobDescription((String) data.get("jobDescription"));
        Integer animalId = Integer.parseInt((String) data.get("animalId"));
        job.setAnimal(animalService.findAnimalById(animalId)
                .orElseThrow(()-> new Exception("No animal with ID"+animalId+" found")));
        Integer workerId = Integer.parseInt((String) data.get("workerId"));
        job.setWorker(workerService.findWorkerById(workerId)
                .orElseThrow(()-> new Exception("No worker with id"+workerId+"found.")));
        return jobService.saveJob(job);
    }

    @GetMapping("/findAll")
    public List<Job> findAll(){
        return jobService.findAllJobs();
    }

    @GetMapping("/findById/{id}")
    public Optional<Job> findById(@PathVariable int id){
        return jobService.findJobById(id);
    }

    @GetMapping("/findByAnimalOrWorkerId")
    public List<Job> findByAnimalOrWorkerId(@RequestParam(name = "animalId") String animalIdStr,
                                            @RequestParam(name = "workerId") String workerIdStr){
        Integer animalId = Integer.parseInt(Objects.equals(animalIdStr, "") ? "-1" : animalIdStr);
        Integer workerId = Integer.parseInt(Objects.equals(workerIdStr, "") ? "-1" : workerIdStr);
        if (animalId != -1 && workerId != -1) {
            return jobService.findByAnimalAndWorkerId(animalId,workerId);
        } else if (animalId != -1) {
            return jobService.findByAnimalId(animalId);
        } else {
            return jobService.findByWorkerId(workerId);
        }
    }

    @DeleteMapping("/delete/id")
    public void delete(@RequestBody Integer id){
        jobService.deleteJobById(id);
    }
}
