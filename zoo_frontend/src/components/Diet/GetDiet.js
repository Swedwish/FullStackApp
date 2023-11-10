import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper, Typography } from '@mui/material';

export default function GetDiet() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    // State variables to store form data and error status
    const [animalId, setAnimalId] = React.useState("");
    const [foodName, setFoodName] = React.useState("");
    const [animalIdError, setAnimalIdError] = React.useState(false);
    const [foodNameError, setFoodNameError] = React.useState(false);
    const [data, setData] = React.useState(null);

    // Event handlers to update state

    const handleAnimalIdChange = (e) => {
        setAnimalId(e.target.value);
        setAnimalIdError(false);
    };

    const handleFoodNameChange = (e) => {
        setFoodName(e.target.value);
        setFoodNameError(false);
    };

    const handleGet = (e) => {
        e.preventDefault();

        if (animalId.trim() === "" && foodName.trim() === "") {
            setAnimalIdError(animalId.trim() === "");
            setFoodNameError(foodName.trim() === "");
            return;
        }

        const diet = {
            animalId,
            foodName,
        };

        console.log(diet);

        fetch(`http://localhost:8080/diet/findById?animalId=${animalId}&foodName=${foodName}`, {
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
                        Get Diet
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Animal ID"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={animalId}
                        onChange={handleAnimalIdChange}
                        error={animalIdError}
                        helperText={animalIdError ? "Animal ID or food name is required" : ""}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Food Name"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={foodName}
                        onChange={handleFoodNameChange}
                        error={foodNameError}
                        helperText={foodNameError ? "Animal ID or food name is required" : ""}
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
                    {data.map((item) =>
                        <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={item.id}>
                            {item.id ? `ID: ${item.id} |` : ""}
                            {item.animal ? `Animal ID: ${item.animal.id} |` : ""}
                            {item.food ? `Food Name: ${item.food.name} |` : ""}
                            {item.amountKg ? `Amount (kg): ${item.amountKg} |` : ""}
                        </Paper>)}
                </Paper>
            )}
        </Container>
    );
}
