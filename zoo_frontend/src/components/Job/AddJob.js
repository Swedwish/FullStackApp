import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper, Typography } from '@mui/material';

export default function AddJob() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    // State variables to store form data and error status
    const [workerId, setWorkerId] = React.useState("");
    const [animalId, setAnimalId] = React.useState("");
    const [jobDescription, setJobDescription] = React.useState("");
    const [workerIdError, setWorkerIdError] = React.useState(false);
    const [animalIdError, setAnimalIdError] = React.useState(false);
    const [resultJob, setResultJob] = React.useState(null);

    // Event handlers to update state
    const handleWorkerIdChange = (e) => {
        setWorkerId(e.target.value);
        setWorkerIdError(false);
    };

    const handleAnimalIdChange = (e) => {
        setAnimalId(e.target.value);
        setAnimalIdError(false);
    };

    const handleJobDescriptionChange = (e) => {
        setJobDescription(e.target.value);
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (workerId.trim() === "" || animalId.trim() === "") {
            setWorkerIdError(workerId.trim() === "");
            setAnimalIdError(animalId.trim() === "");
            return;
        }

        const job = {
            workerId,
            animalId,
            jobDescription,
        };

        console.log(job);

        fetch(`http://localhost:8080/job/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(job),
        })
        .then((res) => res.json())
        .then((result) => {
            setResultJob(result);
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
                    <Typography variant="h5" gutterBottom>
                        Job Addition
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Worker ID"
                        variant="outlined"
                        fullWidth
                        value={workerId}
                        onChange={handleWorkerIdChange}
                        required
                        error={workerIdError}
                        helperText={workerIdError ? "Worker ID is required" : ""}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Animal ID"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={animalId}
                        onChange={handleAnimalIdChange}
                        required
                        error={animalIdError}
                        helperText={animalIdError ? "Animal ID is required" : ""}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Job Description"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={jobDescription}
                        onChange={handleJobDescriptionChange}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleSave}
                        sx={{ mt: 2 }}
                    >
                        Save
                    </Button>
                </Box>
            </Paper>

            {resultJob && (
                <Paper elevation={3} style={paperStyle}>
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
                        {resultJob.id ? `Id: ${resultJob.id} |` : ""}
                        {resultJob.worker ? `Worker ID: ${resultJob.worker.id} |` : ""}
                        {resultJob.animal ? `Animal ID: ${resultJob.animal.id} |` : ""}
                        {resultJob.jobDescription ? `Job Description: ${resultJob.jobDescription} |` : ""}
                    </Paper>
                </Paper>
            )}
        </Container>
    );
}
