import Appbar from '../../components/Common/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
import GetJobById from '../../components/Job/GetJobById';
export default function GetJobByIdPage() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <GetJobById />
      </div>
    </LocalizationProvider>
  );
}
