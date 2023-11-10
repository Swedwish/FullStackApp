import Appbar from '../../components/Common/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
import AddCell from '../../components/Cell/AddCell';
//import { Link } from 'react-router-dom';
function animalAddition() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <AddCell />
      </div>
    </LocalizationProvider>
  );
}

export default animalAddition;