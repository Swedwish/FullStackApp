import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper, Typography } from '@mui/material';

export default function GetFoodRetailerById() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    // State variable to store the ID and the retrieved data
    const [id, setId] = React.useState("");
    const [idError, setIdError] = React.useState(false);
    const [data, setData] = React.useState(null);

    // Event handler to update the ID
    const handleIdChange = (e) => {
        setId(e.target.value);
        setIdError(false);
    };

    // Event handler to fetch data by ID
    const handleGet = (e) => {
        e.preventDefault();

        if (id.trim() === "") {
            setIdError(id.trim() === "");
            return;
        }

        fetch(`http://localhost:8080/foodRetailer/findById/${id}`, {
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
                        Get Food Retailer by ID
                    </Typography>
                    <TextField
                        id="outlined-basic"
                        label="Food Retailer ID"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={id}
                        onChange={handleIdChange}
                        error={idError}
                        helperText={idError ? "Food Retailer ID is required" : ""}
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
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
                        {data.id ? `ID: ${data.id} |` : ""}
                        {data.name ? `Company Name: ${data.name} |` : ""}
                        {data.food ? `Food Name: ${data.food.name} |` : ""}
                        {data.price ? `Price: ${data.price} |` : ""}
                    </Paper>
                </Paper>
            )}
        </Container>
    );
}