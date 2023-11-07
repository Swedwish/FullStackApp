import Appbar from '../components/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import AddJob from '../components/AddJob'
import React from 'react';
//import { Link } from 'react-router-dom';
function JobAddition() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <AddJob />
      </div>
    </LocalizationProvider>
  );
}

export default JobAddition;