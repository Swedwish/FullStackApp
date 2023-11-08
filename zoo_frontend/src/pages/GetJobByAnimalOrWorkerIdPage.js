import Appbar from '../components/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
import GetJobByAnimalOrWorkerId from '../components/GetJobByAnimalOrWorkerId';
export default function GetJobByAnimalOrWorkerIdPage() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="HomePage">
        <Appbar />
        <GetJobByAnimalOrWorkerId />
      </div>
    </LocalizationProvider>
  );
}
