import Appbar from '../../components/Common/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
import ChangeSalary from '../../components/Worker/ChangeSalary';
//import { Link } from 'react-router-dom';
export default function ChangeSalaryPage() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <ChangeSalary />
      </div>
    </LocalizationProvider>
  );
}