package com.webapp.application.controller;

import com.webapp.application.model.Job;
import com.webapp.application.service.AnimalService;
import com.webapp.application.service.JobService;
import com.webapp.application.service.WorkerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;
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
        Integer animalId = (Integer) data.get("animalId");
        job.setAnimal(animalService.findAnimalById(animalId)
                .orElseThrow(()-> new Exception("No animal with ID"+animalId+" found")));
        Integer workerId = (Integer) data.get("workerId");
        job.setWorker(workerService.findWorkerById(workerId)
                .orElseThrow(()-> new Exception("No worker with id"+workerId+"found.")));
        return jobService.saveJob(job);
    }

    @GetMapping("/findAll")
    public List<Job> findAll(){
        return jobService.findAllJobs();
    }

    @GetMapping("/findById")
    public Optional<Job> findJobById(@RequestBody int jobId){
        return jobService.findJobById(jobId);
    }

    @GetMapping("/findByAnimalId")
    public List<Job> findByAnimalId(@RequestBody int animalId){
        return jobService.findByAnimalId(animalId);
    }

    @GetMapping("/findByWorkerId")
    public List<Job> findByWorkerId(@RequestBody int workerId){
        return jobService.findByWorkerId(workerId);
    }

    @DeleteMapping("/delete")
    public void delete(@RequestBody int jobId){
        jobService.deleteJobById(jobId);
    }
}
