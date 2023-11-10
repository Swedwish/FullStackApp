import Appbar from '../../components/Common/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import AddFood from '../../components/Food/AddFood'
import React from 'react';

//import { Link } from 'react-router-dom';
function FoodAddition() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <AddFood />
      </div>
    </LocalizationProvider>
  );
}

export default FoodAddition;