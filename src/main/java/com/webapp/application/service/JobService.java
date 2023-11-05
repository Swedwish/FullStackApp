package com.webapp.application.service;

import com.webapp.application.model.Job;

import javax.swing.plaf.LabelUI;
import java.util.List;
import java.util.Optional;

public interface JobService {
    public Job saveJob(Job job);
    public List<Job> getAllJobs();
    public Optional<Job> getJobById(int id);
    public List<Job> getByAnimalId(int id);
    public List<Job> getByWorkerId(int id);
    public void deleteJobById(int id);
}
