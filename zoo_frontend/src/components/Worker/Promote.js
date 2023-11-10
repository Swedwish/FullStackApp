import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper, Typography } from '@mui/material';

export default function Promote() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    // State variables to store form data and error status
    const [id, setId] = React.useState("");
    const [newJobTitle, setNewJobTitle] = React.useState("");
    const [idError, setIdError] = React.useState(false);
    const [newJobTitleError, setNewJobTitleError] = React.useState(false);
    const [resultWorker, setResultWorker] = React.useState(null);

    // Event handlers to update state

    const handleIdChange = (e) => {
        setId(e.target.value);
        setIdError(false);
    };

    const handleNewJobTitleChange = (e) => {
        setNewJobTitle(e.target.value);
        setNewJobTitleError(false);
    };

    const handlePromotionSubmit = (e) => {
        e.preventDefault();

        if (id.trim() === "" || newJobTitle.trim() === "") {
            setIdError(id.trim() === "");
            setNewJobTitleError(newJobTitle.trim() === "");
            return;
        }

        const workerData = {
            id,
            jobTitle: newJobTitle,
        };

        console.log(workerData);

        fetch(`http://localhost:8080/worker/promote`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(workerData),
        })
            .then((res) => res.json())
            .then((result) => {
                setResultWorker(result);
            })
            .catch((error) => {
                console.error("Error:", error);
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
                        Promote Worker
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Worker ID"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={id}
                        onChange={handleIdChange}
                        required
                        error={idError}
                        helperText={idError ? "Worker ID is required" : ""}
                    />
                    <TextField
                        id="outlined-basic"
                        label="New Job Title"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={newJobTitle}
                        onChange={handleNewJobTitleChange}
                        required
                        error={newJobTitleError}
                        helperText={newJobTitleError ? "New Job Title is required" : ""}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handlePromotionSubmit}
                        sx={{ mt: 2 }}
                    >
                        Promote
                    </Button>
                </Box>
            </Paper>

            {resultWorker && (
                <Paper elevation={3} style={paperStyle}>
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
                        {resultWorker.id ? `ID: ${resultWorker.id} |` : ""}
                        {resultWorker.name ? `Name: ${resultWorker.name} |` : ""}
                        {resultWorker.dateOfBirth ? `Date of Birth: ${resultWorker.dateOfBirth} |` : ""}
                        {resultWorker.salary ? `Salary: ${resultWorker.salary} |` : ""}
                        {resultWorker.jobTitle ? `New Job Title: ${resultWorker.jobTitle} |` : ""}
                        {resultWorker.gender ? `Gender: ${resultWorker.gender} |` : ""}
                    </Paper>
                </Paper>
            )}
        </Container>
    );
}
