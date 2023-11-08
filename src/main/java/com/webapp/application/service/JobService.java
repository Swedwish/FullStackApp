package com.webapp.application.service;

import com.webapp.application.model.Job;

import java.util.List;
import java.util.Optional;

public interface JobService {
    Job saveJob(Job job);
    List<Job> findByAnimalAndWorkerId(int animalId, int workerId);
    List<Job> findAllJobs();
    Optional<Job> findJobById(int id);
    List<Job> findByAnimalId(int id);
    List<Job> findByWorkerId(int id);
    void deleteJobById(int id);
}
