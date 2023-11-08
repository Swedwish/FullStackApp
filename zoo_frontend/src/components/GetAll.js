import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { Container, Paper } from '@mui/material';

export default function GetAllRows(props) {
    const className = props.argument;
    console.log(className);
    const [data, setData] = useState(null);
    const paperStyle = { padding: '50px 20px', width: 600, margin: "20px auto" };

    const handleGetAll = () => {
        console.log(className);
        fetch(`http://localhost:8080/${className}/findAll`)
            .then((response) => response.json())
            .then((result) => {
                setData(result);
            });
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

    const renderDataByClass = (item) => {
        switch (className) {
            case "animal":
                return (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={item.id}>
                        {item.id ? `Id: ${item.id} |` : ""}
                        {item.name ? `Name: ${item.name} |` : ""}
                        {item.species ? `Species: ${item.species} |` : ""}
                        {item.dateOfBirth ? `Date of birth: ${formatDate(item.dateOfBirth)} |` : ""}
                        {item.gender ? `Gender: ${item.gender} |` : ""}
                        {item.cell && item.cell.id ? `Cell id: ${item.cell.id} |` : ""}
                    </Paper>
                );

            case "cell":
                return (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={item.id}>
                        {item.id ? `ID: ${item.id} |` : ""}
                        {item.sizeM3 ? `Size (m^3): ${item.sizeM3} |` : ""}
                        {item.averageTemperature ? `Average Temperature: ${item.averageTemperature} |` : ""}
                    </Paper>
                );
            case "diet":
                return (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }} key={item.id}>
                        {item.id ? `ID: ${item.id} |` : ""}
                        {item.animal ? `Animal ID: ${item.animal.id} |` : ""}
                        {item.food ? `Food Name: ${item.food.name} |` : ""}
                        {item.amountKg ? `Amount (kg): ${item.amountKg} |` : ""}
                    </Paper>
                );
            case "food":
                return (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
                        {item.name ? `Name: ${item.name} |` : ""}
                        {item.kcalories ? `Calories (kcal): ${item.kcalories} |` : ""}
                        {item.isVegetarian !== undefined ? `Is Vegetarian: ${item.isVegetarian ? "Yes" : "No"} |` : ""}
                    </Paper>
                );
            case "foodRetailer":
                return (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
                        {item.id ? `ID: ${item.id}|` : ""}
                        {item.name ? `Company Name: ${item.name} |` : ""}
                        {item.food ? `Food Name: ${item.food.name} |` : ""}
                        {item.price ? `Price: ${item.price} |` : ""}
                    </Paper>
                );
            case "job":
                return (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
                        {item.id ? `Id: ${item.id} |` : ""}
                        {item.worker ? `Worker ID: ${item.worker.id} |` : ""}
                        {item.animal ? `Animal ID: ${item.animal.id} |` : ""}
                        {item.jobDescription ? `Job Description: ${item.jobDescription} |` : ""}
                    </Paper>
                );
            case "worker":
                return (
                    <Paper elevation={6} style={{ margin: "10px", padding: "15px", textAlign: "left" }}>
                        {item.id ? `Id: ${item.id} |` : ""}
                        {item.name ? `Name: ${item.name} |` : ""}
                        {item.dateOfBirth ? `Date of Birth: ${item.dateOfBirth} |` : ""}
                        {item.salary ? `Salary: ${item.salary} |` : ""}
                        {item.jobTitle ? `Job Title: ${item.jobTitle} |` : ""}
                        {item.gender ? `Gender: ${item.gender} |` : ""}
                    </Paper>
                );
            default:
                return null;
        }
    };

    function formatDate(date) {
        if (!date) {
            return "";
        }

        const formattedDate = new Date(date).toLocaleDateString(); // Format as "MM/DD/YYYY"
        return formattedDate;
    }

    return (
        <Container>
            <Paper elevation={3} style={{ padding: '50px 20px', width: 600, margin: '20px auto' }}>
                <Box
                    component="form"
                    noValidate
                    autoComplete="off"
                >
                    <h2>{classNameHandler(className)} Data</h2>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={handleGetAll}
                        sx={{ mt: 2 }}
                    >
                        Get All
                    </Button>
                </Box>
            </Paper>

            {data && (
                <Paper elevation={3} style={paperStyle}>
                    {data.map((item) => renderDataByClass(item))}
                </Paper>
            )}
        </Container>
    );
}