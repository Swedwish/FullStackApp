import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Paper } from '@mui/material';

export default function DeleteItem(props) {
    const className = props.argument;
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    // State variables to store form data and result status
    const [id, setId] = React.useState("");
    const [idError, setIdError] = React.useState(false);
    const [result, setResult] = React.useState(null);
    const handleIdChange = (e) => {
        setId(e.target.value);
        setIdError(false);
        console.log(className);
    };

    const classNameHandler = (name) => {
        switch (name){
            case "animal":
                return("Animal");
            case "cell":
                return("Cell");
            case "diet":
                return("Diet");
            case "food":
                return("Food");
            case "foodRetailer":
                return("Food Retailer");
            case "job":
                return("Job");
            case "worker":
                return("Worker");
            default:
                return("Unknown");
        }
    }

    const handleDelete = (e) => {
        e.preventDefault();

        if (id.trim() === "") {
            setIdError(id.trim() === "");
            return;
        }

        fetch(`http://localhost:8080/${className}/delete/${id}`, {
            method: "DELETE",
        })
        .then((res) => {
            if (res.status === 200) {
                setResult("SUCCESS");
            } else {
                setResult("FAILURE");
            }
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
                        {classNameHandler(className)} deletion
                    </Typography>
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
                        sx={{ mt: 2 }}
                    />
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleDelete}
                        sx={{ mt: 2 }}
                    >
                        Delete
                    </Button>
                </Box>
            </Paper>

            {result && (
                <Paper elevation={3} style={paperStyle}>
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
                        {result}
                    </Paper>
                </Paper>
            )}
        </Container>
    );
}