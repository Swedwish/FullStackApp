import Appbar from '../../components/Common/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
import GetDiet from '../../components/Diet/GetDiet';
export default function GetDietPage() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <GetDiet />
      </div>
    </LocalizationProvider>
  );
}
