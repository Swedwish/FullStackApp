import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper, Typography} from '@mui/material';

export default function GetJobByAnimalOrWorkerId() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };

    // State variables to store form data and error status
    const [animalId, setAnimalId] = useState('');
    const [workerId, setWorkerId] = useState('');
    const [animalIdError, setAnimalIdError] = useState(false);
    const [workerIdError, setWorkerIdError] = useState(false);
    const [jobs, setJobs] = useState(null);

    // Event handler to update state
    const handleAnimalIdChange = (e) => {
        setAnimalId(e.target.value);
        setAnimalIdError(false);
    };

    const handleWorkerIdChange = (e) => {
        setWorkerId(e.target.value);
        setWorkerIdError(false);
    };

    const handleGetJobs = (e) => {
        e.preventDefault();

        if (animalId.trim() === '' && workerId.trim() === '') {
            setAnimalIdError(true);
            setWorkerIdError(true);
            return;
        }

        const url = `http://localhost:8080/job/findByAnimalOrWorkerId?animalId=${animalId}&workerId=${workerId}`;
        fetch(url, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then((res) => {
                console.log('Response status:', res.status);
                return res.json();
            })
            .then((result) => {
                console.log('Received data:', result);
                setJobs(result);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };

    return (
        <Container>
            <Paper elevation={3} style={paperStyle}>
                <Box component="form" noValidate autoComplete="off">
                    <Typography variant="h5" gutterBottom>
                        Get Job By Animal ID And/Or Worker ID
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Animal ID"
                        variant="outlined"
                        fullWidth
                        value={animalId}
                        onChange={handleAnimalIdChange}
                        required
                        error={animalIdError}
                        helperText={animalIdError ? 'Animal ID or Worker ID is required' : ''}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Worker ID"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={workerId}
                        onChange={handleWorkerIdChange}
                        required
                        error={workerIdError}
                        helperText={workerIdError ? 'Animal ID or Worker ID is required' : ''}
                    />
                    <Button variant="contained" color="primary" onClick={handleGetJobs} sx={{ mt: 2 }}>
                        Get Jobs
                    </Button>
                </Box>
            </Paper>

            {jobs && jobs[0] && (
                <Paper elevation={3} style={paperStyle}>
                    {jobs.map((job) => (
                        <Paper elevation={6} style={{ margin: '10px', padding: '15px', textAlign: 'left' }} key={job.id}>
                            {job.id ? `ID: ${job.id} |` : ''}
                            {job.worker ? `Worker ID: ${job.worker.id} |` : ''}
                            {job.animal ? `Animal ID: ${job.animal.id} |` : ''}
                            {job.jobDescription ? `Job Description: ${job.jobDescription} |` : ''}
                        </Paper>
                    ))}
                </Paper>
            )}
        </Container>
    );
}
