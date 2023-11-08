import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper, Typography } from '@mui/material';

export default function AddFoodRetailer() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    // State variables to store form data and error status
    const [companyName, setCompanyName] = React.useState("");
    const [foodName, setFoodName] = React.useState("");
    const [price, setPrice] = React.useState("");
    const [companyNameError, setCompanyNameError] = React.useState(false);
    const [foodNameError, setFoodNameError] = React.useState(false);
    const [resultFoodRetailer, setResultFoodRetailer] = React.useState(null);

    // Event handlers to update state
    const handleCompanyNameChange = (e) => {
        setCompanyName(e.target.value);
        setCompanyNameError(false);
    };

    const handleFoodNameChange = (e) => {
        setFoodName(e.target.value);
        setFoodNameError(false);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (companyName.trim() === "" || foodName.trim() === "") {
            setCompanyNameError(companyName.trim() === "");
            setFoodNameError(foodName.trim() === "");
            return;
        }

        const foodRetailer = {
            name:companyName,
            foodName,
            price,
        };

        console.log(foodRetailer);

        fetch(`http://localhost:8080/foodRetailer/add/${foodRetailer.foodName}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(foodRetailer),
        })
        .then((res) => res.json())
        .then((result) => {
            setResultFoodRetailer(result);
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
                        Food Retailer Addition
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Company Name"
                        variant="outlined"
                        fullWidth
                        value={companyName}
                        onChange={handleCompanyNameChange}
                        required
                        error={companyNameError}
                        helperText={companyNameError ? "Company Name is required" : ""}
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
                        label="Price"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={price}
                        onChange={handlePriceChange}
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

            {resultFoodRetailer && (
                <Paper elevation={3} style={paperStyle}>
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
                        {resultFoodRetailer.id ? `ID: ${resultFoodRetailer.id}|` : ""}
                        {resultFoodRetailer.name ? `Company Name: ${resultFoodRetailer.name} |` : ""}
                        {resultFoodRetailer.food ? `Food Name: ${resultFoodRetailer.food.name} |` : ""}
                        {resultFoodRetailer.price ? `Price: ${resultFoodRetailer.price} |` : ""}
                    </Paper>
                </Paper>
            )}
        </Container>
    );
}
