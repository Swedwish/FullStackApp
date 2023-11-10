import Appbar from '../../components/Common/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import AddWorker from '../../components/Worker/AddWorker'
import React from 'react';
//import { Link } from 'react-router-dom';
function WorkerAddition() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <AddWorker />
      </div>
    </LocalizationProvider>
  );
}

export default WorkerAddition;