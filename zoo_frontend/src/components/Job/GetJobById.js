import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper } from '@mui/material';

export default function GetJobById() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };

    // State variables to store form data and error status
    const [jobId, setJobId] = useState('');
    const [jobIdError, setJobIdError] = useState(false);
    const [job, setJob] = useState(null);

    // Event handler to update state
    const handleJobIdChange = (e) => {
        setJobId(e.target.value);
        setJobIdError(false);
    };

    const handleGetJob = (e) => {
        e.preventDefault();

        if (jobId.trim() === '') {
            setJobIdError(true);
            return;
        }

        fetch(`http://localhost:8080/job/findById/${jobId}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => {
                console.log('Response status:', res.status);
                return res.json();
            })
            .then((result) => {
                console.log('Received data:', result);
                setJob(result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <TextField
                        id="outlined-basic"
                        label="Job ID"
                        variant="outlined"
                        fullWidth
                        value={jobId}
                        onChange={handleJobIdChange}
                        required
                        error={jobIdError}
                        helperText={jobIdError ? 'Job ID is required' : ''}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleGetJob}
                        sx={{ mt: 2 }}
                    >
                        Get Job
                    </Button>
                </Box>
            </Paper>

            {job && (
                <Paper elevation={3} style={paperStyle}>
                    <Paper elevation={6} style={{ margin: '10px', padding: '15px', textAlign: 'left' }}>
                        {job.id ? `ID: ${job.id} |` : ''}
                        {job.worker ? `Worker ID: ${job.worker.id} |` : ''}
                        {job.animal ? `Animal ID: ${job.animal.id} |` : ''}
                        {job.jobDescription ? `Job Description: ${job.jobDescription} |` : ''}
                    </Paper>
                </Paper>
            )}
        </Container>
    );
}
