import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper, Typography } from '@mui/material';

export default function GetFoodByName() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    // State variables to store form data and error status
    const [foodName, setFoodName] = React.useState("");
    const [foodNameError, setFoodNameError] = React.useState(false);
    const [resultFood, setResultFood] = React.useState(null);

    // Event handlers to update state



    const handleFoodNameChange = (e) => {
        setFoodName(e.target.value);
        setFoodNameError(false);
    };

    const handleGet = (e) => {
        e.preventDefault();

        if (foodName.trim() === "") {
            setFoodNameError(foodName.trim() === "");
            return;
        }


        fetch(`http://localhost:8080/food/findByName/${foodName}`, {
            method: "GET",
            headers: { "Content-Type": "application/json" },
        })
            .then((res) => res.json())
            .then((result) => {
                setResultFood(result);
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
                        Get Food By Name
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Food Name"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={foodName}
                        onChange={handleFoodNameChange}
                        error={foodNameError}
                        helperText={foodNameError ? "Food Name is required" : ""}
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

            {resultFood && (
                <Paper elevation={3} style={paperStyle}>
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
                        {resultFood.name ? `Name: ${resultFood.name} |` : ""}
                        {resultFood.kcalories ? `Calories (kcal): ${resultFood.kcalories} |` : ""}
                        {resultFood.isVegetarian !== undefined ? `Is Vegetarian: ${resultFood.isVegetarian ? "Yes" : "No"} |` : ""}
                    </Paper>
                </Paper>
            )}
        </Container>
    );
}
