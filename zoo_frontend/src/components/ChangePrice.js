import React, { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper } from '@mui/material';

export default function ChangePrice() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: '20px auto' };

    // State variables to store form data and error status
    const [id, setId] = useState('');
    const [price, setPrice] = useState('');
    const [idError, setIdError] = useState(false);
    const [priceError, setPriceError] = useState(false);
    const [resultFoodRetailer, setResultFoodRetailer] = useState(null);

    // Event handlers to update state
    const handleIdChange = (e) => {
        setId(e.target.value);
        setIdError(false);
    };

    const handlePriceChange = (e) => {
        setPrice(e.target.value);
        setPriceError(false);
    };

    const handleUpdatePrice = (e) => {
        e.preventDefault();

        if (id.trim() === '' || price.trim() === '') {
            setIdError(id.trim() === '');
            setPriceError(price.trim() === '');
            return;
        }

        const foodRetailer = {
            id,
            price,
        };

        fetch(`http://localhost:8080/foodRetailer/changePrice`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(foodRetailer),
        })
            .then((res) => {
                console.log('Response status:', res.status);
                return res.json();
            })
            .then((result) => {
                console.log('Received data:', result);
                setResultFoodRetailer(result);
            })
            .catch((error) => {
                console.error('Error:', error);
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
                        label="Food Retailer ID"
                        variant="outlined"
                        fullWidth
                        value={id}
                        onChange={handleIdChange}
                        required
                        error={idError}
                        helperText={idError ? 'Food Retailer ID is required' : ''}
                    />
                    <TextField
                        id="outlined-basic"
                        label="New Price"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={price}
                        onChange={handlePriceChange}
                        required
                        error={priceError}
                        helperText={priceError ? 'New Price is required' : ''}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleUpdatePrice}
                        sx={{ mt: 2 }}
                    >
                        Update Price
                    </Button>
                </Box>
            </Paper>

            {resultFoodRetailer && (
                <Paper elevation={3} style={paperStyle}>
                    <Paper elevation={6} style={{ margin: '10px', padding: '15px', textAlign: 'left' }}>
                        {resultFoodRetailer.id ? `ID: ${resultFoodRetailer.id} |` : ''}
                        {resultFoodRetailer.companyName ? `Company Name: ${resultFoodRetailer.companyName} |` : ''}
                        {resultFoodRetailer.food ? `Food Name: ${resultFoodRetailer.food.name} |` : ''}
                        {resultFoodRetailer.price ? `Price: ${resultFoodRetailer.price} |` : ''}
                    </Paper>
                </Paper>
            )}
        </Container>
    );
}
