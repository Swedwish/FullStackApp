import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Container, Paper, Typography } from '@mui/material';

function formatDate(date) {
    if (!date) {
        return "";
    }

    const formattedDate = new Date(date).toLocaleDateString(); // Format as "MM/DD/YYYY"
    return formattedDate;
}

export default function GetAnimalByName() {
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    // State variables to store form data and error status
    const [name, setName] = React.useState("");
    const [nameError, setNameError] = React.useState(false);
    const [data, setData] = React.useState(null);

    // Event handlers to update state

    const handleNameChange = (e) => {
        setName(e.target.value);
        setNameError(false);
    };


    const handleGet = () => {
        fetch(`http://localhost:8080/animal/findByName/${name}`)
            .then((response) => response.json())
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
                        Get By Name
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
                            {item.id ? `Id: ${item.id} |` : ""}
                            {item.name ? `Name: ${item.name} |` : ""}
                            {item.species ? `Species: ${item.species} |` : ""}
                            {item.dateOfBirth ? `Date of birth: ${formatDate(item.dateOfBirth)} |` : ""}
                            {item.gender ? `Gender: ${item.gender} |` : ""}
                            {item.cell && item.cell.id ? `Cell id: ${item.cell.id} |` : ""}
                        </Paper>)}
                </Paper>
            )}
        </Container>
    );
}
