import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper } from '@mui/material';

function formatDate(date) {
    if (!date) {
        return "";
    }

    const formattedDate = new Date(date).toLocaleDateString(); // Format as "MM/DD/YYYY"
    return formattedDate;
}

export default function MoveAnimal() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    // State variables to store form data and error status
    const [id, setId] = React.useState("");
    const [cellNumber, setCellNumber] = React.useState("");
    const [idError, setIdError] = React.useState(false);
    const [cellNumberError, setCellNumberError] = React.useState(false);
    const [resultAnimal, setResultAnimal] = React.useState(null);

    // Event handlers to update state

    const handleIdChange = (e) => {
        setId(e.target.value);
        setIdError(false);
    };

    const handleCellNumberChange = (e) => {
        setCellNumber(e.target.value);
        setCellNumberError(false);
    };

    const handleMove = (e) => {
        e.preventDefault();

        if (id.trim() === "" || cellNumber.trim() === "") {
            setIdError(id.trim() === "");
            setCellNumberError(cellNumber.trim() === "");
            return;
        }
        const animal = {
            id,
            cellId: cellNumber
        };

        console.log(animal);

        fetch(`http://localhost:8080/animal/moveAnimal`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(animal),
        })
            .then((res) => {
                res.json();
                console.log(res);
            })
            .then((result) => {
                setResultAnimal(result);
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
                        label="ID"
                        variant="outlined"
                        fullWidth
                        value={id}
                        onChange={handleIdChange}
                        required
                        error={idError}
                        helperText={idError ? "ID is required" : ""}
                    />
                    <TextField
                        id="outlined-basic"
                        label="New cell mumber(id)"
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
                        onClick={handleMove}
                        sx={{ mt: 2 }}
                    >
                        Move
                    </Button>
                </Box>
            </Paper>

            {resultAnimal && (
                <Paper elevation={3} style={paperStyle}>
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
                        {resultAnimal.id ? `Id: ${resultAnimal.id} |` : ""}
                        {resultAnimal.name ? `Name: ${resultAnimal.name} |` : ""}
                        {resultAnimal.species ? `Species: ${resultAnimal.species} |` : ""}
                        {resultAnimal.dateOfBirth ? `Date of birth: ${formatDate(resultAnimal.dateOfBirth)} |` : ""}
                        {resultAnimal.gender ? `Gender: ${resultAnimal.gender} |` : ""}
                        {resultAnimal.cell && resultAnimal.cell.id ? `Cell id: ${resultAnimal.cell.id} |` : ""}
                    </Paper>
                </Paper>
            )}
        </Container>
    );
}
