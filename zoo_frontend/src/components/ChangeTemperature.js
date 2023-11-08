import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper } from '@mui/material';


export default function ChangeTemperature() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    // State variables to store form data and error status
    const [id, setId] = React.useState("");
    const [averageTemperature, setAverageTemperature] = React.useState("");
    const [idError, setIdError] = React.useState(false);
    const [AverageTemperatureError, setAverageTemperatureError] = React.useState(false);
    const [resultCell, setResultCell] = React.useState(null);

    // Event handlers to update state

    const handleIdChange = (e) => {
        setId(e.target.value);
        setIdError(false);
    };

    const handleAverageTemperatureChange = (e) => {
        setAverageTemperature(e.target.value);
        setAverageTemperatureError(false);
    };

    const handleMove = (e) => {
        e.preventDefault();
    
        if (id.trim() === "" || averageTemperature.trim() === "") {
            setIdError(id.trim() === "");
            setAverageTemperatureError(averageTemperature.trim() === "");
            return;
        }
        const cell = {
            id,
            averageTemperature,
        };
    
        console.log(cell);
    
        fetch(`http://localhost:8080/cell/changeTemperature`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cell),
        })
            .then((res) => {
                console.log("Response status:", res.status);
                return res.json();
            })
            .then((result) => {
                console.log("Received data:", result);
                setResultCell(result);
            })
            .catch((error) => {
                console.error("Error:", error);
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
                        label="New average temperature"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={averageTemperature}
                        onChange={handleAverageTemperatureChange}
                        required
                        error={AverageTemperatureError}
                        helperText={AverageTemperatureError ? "Cell Number is required" : ""}
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

            {resultCell && (
                <Paper elevation={3} style={paperStyle}>
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
                        {resultCell.id ? `ID: ${resultCell.id} |` : ""}
                        {resultCell.sizeM3 ? `Size (m^3): ${resultCell.sizeM3} |` : ""}
                        {resultCell.averageTemperature ? `Average Temperature: ${resultCell.averageTemperature} |` : ""}
                    </Paper>
                </Paper>
            )}
        </Container>
    );
}
