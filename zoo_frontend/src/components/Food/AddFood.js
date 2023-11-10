import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper, Typography } from '@mui/material';

export default function AddFood() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    // State variables to store form data and error status
    const [name, setName] = React.useState("");
    const [kcalories, setKcalories] = React.useState("");
    const [isVegetarian, setIsVegetarian] = React.useState(false);
    const [nameError, setNameError] = React.useState(false);
    const [resultFood, setResultFood] = React.useState(null);

    // Event handlers to update state
    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError(false);
    };

    const handleKcaloriesChange = (e) => {
        setKcalories(e.target.value);
    };

    const handleIsVegetarianChange = (e) => {
        setIsVegetarian(e.target.checked);
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (name.trim() === "") {
            setNameError(true);
            return;
        }

        const food = {
            name,
            kcalories,
            isVegetarian,
        };

        console.log(food);

        fetch(`http://localhost:8080/food/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(food),
        })
        .then((res) => res.json())
        .then((result) => {
            setResultFood(result);
            console.log(result);
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
                        Food Addition
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
                    <TextField
                        id="outlined-basic"
                        label="Calories (kcal)"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={kcalories}
                        onChange={handleKcaloriesChange}
                    />
                    <div>
                        <label>Is Vegetarian:</label>
                        <input
                            type="checkbox"
                            checked={isVegetarian}
                            onChange={handleIsVegetarianChange}
                            sx={{ ml: 2 }}
                        />
                    </div>
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
