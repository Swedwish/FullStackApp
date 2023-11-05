package com.webapp.application.service;

import com.webapp.application.model.Job;

import java.util.List;
import java.util.Optional;

public interface JobService {
    public Job saveJob(Job job);
    public List<Job> findAllJobs();
    public Optional<Job> findJobById(int id);
    public List<Job> findByAnimalId(int id);
    public List<Job> findByWorkerId(int id);
    public void deleteJobById(int id);
}
