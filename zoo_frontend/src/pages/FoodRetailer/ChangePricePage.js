import Appbar from '../../components/Common/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
import ChangePrice from '../../components/FoodRetailer/ChangePrice';
export default function ChangePricePage() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <ChangePrice />
      </div>
    </LocalizationProvider>
  );
  }