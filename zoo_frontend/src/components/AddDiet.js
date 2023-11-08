import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper, Typography } from '@mui/material';

export default function AddDiet() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    // State variables to store form data and error status
    const [animalId, setAnimalId] = React.useState("");
    const [foodName, setFoodName] = React.useState("");
    const [amountKg, setAmountKg] = React.useState("");
    const [animalIdError, setAnimalIdError] = React.useState(false);
    const [foodNameError, setFoodNameError] = React.useState(false);
    const [amountKgError, setAmountKgError] = React.useState(false);
    const [resultDiet, setResultDiet] = React.useState(null);

    // Event handlers to update state

    const handleAnimalIdChange = (e) => {
        setAnimalId(e.target.value);
        setAnimalIdError(false);
    };

    const handleFoodNameChange = (e) => {
        setFoodName(e.target.value);
        setFoodNameError(false);
    };

    const handleAmountKgChange = (e) => {
        setAmountKg(e.target.value);
        setAmountKgError(false);
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (animalId.trim() === "" || foodName.trim() === "" || amountKg.trim() === "") {
            setAnimalIdError(animalId.trim() === "");
            setFoodNameError(foodName.trim() === "");
            setAmountKgError(amountKg.trim() === "");
            return;
        }

        const diet = {
            animalId,
            foodName,
            amountKg,
        };

        console.log(diet);

        fetch(`http://localhost:8080/diet/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(diet),
        })
        .then((res) => res.json())
        .then((result) => {
            setResultDiet(result);
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
                        Diet Addition
                    </Typography>
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
                        label="Food Name"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={foodName}
                        onChange={handleFoodNameChange}
                        required
                        error={foodNameError}
                        helperText={foodNameError ? "Food Name is required" : ""}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Amount (kg)"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={amountKg}
                        onChange={handleAmountKgChange}
                        required
                        error={amountKgError}
                        helperText={amountKgError ? "Amount (kg) is required" : ""}
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

            {resultDiet && (
                <Paper elevation={3} style={paperStyle}>
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
                        {resultDiet.id ? `ID: ${resultDiet.id} |` : ""}
                        {resultDiet.animal ? `Animal ID: ${resultDiet.animal.id} |` : ""}
                        {resultDiet.food ? `Food Name: ${resultDiet.food.name} |` : ""}
                        {resultDiet.amountKg ? `Amount (kg): ${resultDiet.amountKg} |` : ""}
                    </Paper>
                </Paper>
            )}
        </Container>
    );
}
