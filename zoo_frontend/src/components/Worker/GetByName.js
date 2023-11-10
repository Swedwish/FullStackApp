import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper, Typography } from '@mui/material';

export default function GetByName() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    // State variables to store form data and error status
    const [name, setName] = React.useState("");
    const [nameError, setNameError] = React.useState(false);
    const [data, setData] = React.useState(null);

    // Event handlers to update state
    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError(false);
    };

    const handleGet = (e) => {
        e.preventDefault();

        if (name.trim() === "") {
            setNameError(true);
            return;
        }

        fetch(`http://localhost:8080/worker/findByName?name=${name}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((result) => {
                setData(result);
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
                        Get Workers by Name
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={name}
                        onChange={handleNameChange}
                        error={nameError}
                        helperText={nameError ? "Name is required" : ""}
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

            {data && (
                <Paper elevation={3} style={paperStyle}>
                    {data.map((worker) => (
                        <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={worker.id}>
                            {worker.id ? `ID: ${worker.id} |` : ""}
                            {worker.name ? `Name: ${worker.name} |` : ""}
                            {worker.dateOfBirth ? `Date of Birth: ${worker.dateOfBirth} |` : ""}
                            {worker.salary ? `Salary: ${worker.salary} |` : ""}
                            {worker.jobTitle ? `Job Title: ${worker.jobTitle} |` : ""}
                            {worker.gender ? `Gender: ${worker.gender} |` : ""}
                        </Paper>
                    ))}
                </Paper>
            )}
        </Container>
    );
}