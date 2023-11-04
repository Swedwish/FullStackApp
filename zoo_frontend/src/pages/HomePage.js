import Appbar from '../components/Appbar';
import Animal from '../components/Animal';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
//import { Link } from 'react-router-dom';
function HomePage() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <Animal />
      </div>
    </LocalizationProvider>
  );
}

export default HomePage;
