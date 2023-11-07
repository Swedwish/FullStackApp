import Appbar from '../components/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
import AddDiet from '../components/AddDiet';
//import { Link } from 'react-router-dom';
function DietAddition() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <AddDiet />
      </div>
    </LocalizationProvider>
  );
}

export default DietAddition;