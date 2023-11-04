package com.webapp.application.model;

import com.webapp.application.model.Animal;
import com.webapp.application.model.Worker;
import jakarta.persistence.*;


@Entity
public class Job {

    @EmbeddedId
    private JobId jobId;

    @Column(name = "job_description")
    private String jobDescription;

    // Constructors, getters, and setters

    public JobId getJobId() {
        return jobId;
    }

    public void setJobId(JobId jobId) {
        this.jobId = jobId;
    }

    public String getJobDescription() {
        return jobDescription;
    }

    public void setJobDescription(String jobDescription) {
        this.jobDescription = jobDescription;
    }
}