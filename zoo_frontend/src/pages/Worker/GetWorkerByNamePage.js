import Appbar from '../../components/Common/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
import GetByName from '../../components/Worker/GetByName';
//import { Link } from 'react-router-dom';
export default function GetWorkerByNamePage() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <GetByName />
      </div>
    </LocalizationProvider>
  );
}