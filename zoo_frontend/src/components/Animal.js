import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function Animal() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    // State variables to store form data and error status
    const [name, setName] = React.useState("");
    const [species, setSpecies] = React.useState("");
    const [dateOfBirth, setDateOfBirth] = React.useState(null);
    const [gender, setGender] = React.useState("");
    const [cellNumber, setCellNumber] = React.useState("");
    const [speciesError, setSpeciesError] = React.useState(false);
    const [cellNumberError, setCellNumberError] = React.useState(false);

    // Event handlers to update state
    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSpeciesChange = (e) => {
        setSpecies(e.target.value);
        setSpeciesError(false);
    };

    const handleDateOfBirthChange = (date) => {
        setDateOfBirth(date);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handleCellNumberChange = (e) => {
        setCellNumber(e.target.value);
        setCellNumberError(false);
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (species.trim() === "" || cellNumber.trim() === "") {
            setSpeciesError(species.trim() === "");
            setCellNumberError(cellNumber.trim() === "");
            return;
        }
        const animal = {
            name,
            species,
            dateOfBirth,
            gender,
            cell_id: cellNumber,
        };

        console.log(animal);

        fetch(`http://localhost:8080/animal/add/${cellNumber}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(animal),
        }).then(() => {
            console.log("New animal added");
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
                        label="Name"
                        variant="outlined"
                        fullWidth
                        value={name}
                        onChange={handleNameChange}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Species"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={species}
                        onChange={handleSpeciesChange}
                        required
                        error={speciesError}
                        helperText={speciesError ? "Species is required" : ""}
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
                        label="Gender (F/M)"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={gender}
                        onChange={handleGenderChange}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Cell Number"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={cellNumber}
                        onChange={handleCellNumberChange}
                        required
                        error={cellNumberError}
                        helperText={cellNumberError ? "Cell Number is required" : ""}
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
        </Container>
    );
}