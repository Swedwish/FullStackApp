import Appbar from '../../components/Common/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
import Promote from '../../components/Worker/Promote';
//import { Link } from 'react-router-dom';
export default function PromotePage() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <Promote />
      </div>
    </LocalizationProvider>
  );
}