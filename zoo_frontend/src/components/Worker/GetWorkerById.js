import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper, Typography } from '@mui/material';

export default function GetById() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    // State variables to store form data and error status
    const [id, setId] = React.useState("");
    const [idError, setIdError] = React.useState(false);
    const [worker, setWorker] = React.useState(null);

    // Event handlers to update state
    const handleIdChange = (e) => {
        setId(e.target.value);
        setIdError(false);
    };

    const handleGet = (e) => {
        e.preventDefault();

        if (id.trim() === "") {
            setIdError(true);
            return;
        }

        fetch(`http://localhost:8080/worker/findById?id=${id}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((result) => {
                setWorker(result);
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
                        Get Worker by ID
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="ID"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={id}
                        onChange={handleIdChange}
                        error={idError}
                        helperText={idError ? "ID is required" : ""}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleGet}
                        sx={{ mt: 2 }}
                    >
                        Get
                    </Button>
                </Box>
            </Paper>

            {worker && (
                <Paper elevation={3} style={paperStyle}>
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
                        {worker.id ? `ID: ${worker.id} |` : ""}
                        {worker.name ? `Name: ${worker.name} |` : ""}
                        {worker.dateOfBirth ? `Date of Birth: ${worker.dateOfBirth} |` : ""}
                        {worker.salary ? `Salary: ${worker.salary} |` : ""}
                        {worker.jobTitle ? `Job Title: ${worker.jobTitle} |` : ""}
                        {worker.gender ? `Gender: ${worker.gender} |` : ""}
                    </Paper>
                </Paper>
            )}
        </Container>
    );
}
