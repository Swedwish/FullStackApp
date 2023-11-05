package com.webapp.application.service;

import com.webapp.application.model.Job;
import com.webapp.application.repository.JobRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class JobServiceImpl implements JobService{
    @Autowired
    JobRepository jobRepository;

    @Override
    public Job saveJob(Job job) {
        return jobRepository.save(job);
    }

    @Override
    public List<Job> findAllJobs() {
        return jobRepository.findAll();
    }

    @Override
    public Optional<Job> findJobById(int id) {
        return jobRepository.findById(id);
    }

    @Override
    public List<Job> findByAnimalId(int id) {
        return jobRepository.findByAnimalId(id);
    }

    @Override
    public List<Job> findByWorkerId(int id) {
        return jobRepository.findByWorkerId(id);
    }

    @Override
    public void deleteJobById(int id) {
        jobRepository.findById(id).map(job -> {
            jobRepository.delete(job);
            return null;
        });
    }
}
