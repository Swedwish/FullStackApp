import Appbar from '../../components/Common/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
import GetFoodRetailerById from '../../components/FoodRetailer/GetFoodRetailerById';
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
