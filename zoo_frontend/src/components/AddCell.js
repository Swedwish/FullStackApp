import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper } from '@mui/material';

export default function AddCell() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    // State variables to store form data and error status
    const [id, setId] = React.useState("");
    const [sizeM3, setSizeM3] = React.useState("");
    const [averageTemperature, setAverageTemperature] = React.useState("");
    const [idError, setIdError] = React.useState(false);
    const [sizeM3Error, setSizeM3Error] = React.useState(false);
    const [averageTemperatureError, setAverageTemperatureError] = React.useState(false);
    const [resultCell, setResultCell] = React.useState(null);

    // Event handlers to update state
    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handleSizeM3Change = (e) => {
        setSizeM3(e.target.value);
        setSizeM3Error(false);
    };

    const handleAverageTemperatureChange = (e) => {
        setAverageTemperature(e.target.value);
        setAverageTemperatureError(false);
    };

    const handleSave = (e) => {
        e.preventDefault();

        if (id.trim() === "" || sizeM3.trim() === "" || averageTemperature.trim() === "") {
            setIdError(id.trim() === "");
            setSizeM3Error(sizeM3.trim() === "");
            setAverageTemperatureError(averageTemperature.trim() === "");
            return;
        }

        const cell = {
            id,
            sizeM3,
            averageTemperature,
        };

        console.log(cell);

        fetch(`http://localhost:8080/cell/add`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(cell),
        })
        .then((res) => res.json())
        .then((result) => {
            setResultCell(result);
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
                        label="Size (m^3)"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={sizeM3}
                        onChange={handleSizeM3Change}
                        required
                        error={sizeM3Error}
                        helperText={sizeM3Error ? "Size (m^3) is required" : ""}
                    />
                    <TextField
                        id="outlined-basic"
                        label="Average Temperature"
                        variant="outlined"
                        fullWidth
                        sx={{ mt: 2 }}
                        value={averageTemperature}
                        onChange={handleAverageTemperatureChange}
                        required
                        error={averageTemperatureError}
                        helperText={averageTemperatureError ? "Average Temperature is required" : ""}
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
