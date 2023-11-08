import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper, Typography } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function AddWorker() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    // State variables to store form data and error status
    const [name, setName] = React.useState("");
    const [dateOfBirth, setDateOfBirth] = React.useState(null);
    const [Salary, setSalary] = React.useState("");
    const [jobTitle, setJobTitle] = React.useState("");
    const [Gender, setGender] = React.useState("");
    const [nameError, setNameError] = React.useState(false);
    const [resultWorker, setResultWorker] = React.useState(null);

    // Event handlers to update state
    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError(false);
    };

    const handleDateOfBirthChange = (date) => {
        setDateOfBirth(date);
    };

    const handleSalaryChange = (e) => {
        setSalary(e.target.value);
    };

    const handleJobTitleChange = (e) => {
        setJobTitle(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (name.trim() === "") {
            setNameError(name.trim() === "");
            return;
        }

        const worker = {
            name,
            dateOfBirth,
            salary:Salary,
            jobTitle,
            gender:Gender,
        };

        console.log(worker);

        fetch(`http://localhost:8080/worker/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(worker),
        })
        .then((res) => res.json())
        .then((result) => {
            setResultWorker(result);
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
                        Worker Addition
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={handleNameChange}
                        required
                        error={nameError}
                        helperText={nameError ? "Name is required" : ""}
                    />
                    <DatePicker
                        label="Date of Birth"
                        value={dateOfBirth}
                        format="DD.MM.YYYY"
                        onChange={handleDateOfBirthChange}
                        fullWidth
                        sx={{ mt: 2, width: '100%' }}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Salary"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={Salary}
                        onChange={handleSalaryChange}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Job Title"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={jobTitle}
                        onChange={handleJobTitleChange}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Gender"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={Gender}
                        onChange={handleGenderChange}
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

            {resultWorker && (
                <Paper elevation={3} style={paperStyle}>
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
                        {resultWorker.id ? `Id: ${resultWorker.id} |` : ""}
                        {resultWorker.name ? `Name: ${resultWorker.name} |` : ""}
                        {resultWorker.dateOfBirth ? `Date of Birth: ${resultWorker.dateOfBirth} |` : ""}
                        {resultWorker.salary ? `Salary: ${resultWorker.salary} |` : ""}
                        {resultWorker.jobTitle ? `Job Title: ${resultWorker.jobTitle} |` : ""}
                        {resultWorker.gender ? `Gender: ${resultWorker.gender} |` : ""}
                    </Paper>
                </Paper>
            )}
        </Container>
    );
}
