import Appbar from '../components/Appbar';
import MoveAnimal from '../components/MoveAnimal';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
//import { Link } from 'react-router-dom';
function MoveAnimalPage() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <MoveAnimal />
      </div>
    </LocalizationProvider>
  );
}

export default MoveAnimalPage;