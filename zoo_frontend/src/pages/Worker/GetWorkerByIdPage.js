import Appbar from '../../components/Common/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
import GetById from '../../components/Worker/GetWorkerById';
//import { Link } from 'react-router-dom';
export default function GetWorkerByIdPage() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <GetById />
      </div>
    </LocalizationProvider>
  );
}