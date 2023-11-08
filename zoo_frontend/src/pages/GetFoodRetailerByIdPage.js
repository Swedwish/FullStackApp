import Appbar from '../components/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
import GetFoodRetailerById from '../components/GetFoodRetailerById';
export default function GetFoodRetailerByIdPage() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <GetFoodRetailerById />
      </div>
    </LocalizationProvider>
  );
}
