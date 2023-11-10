import Appbar from '../../components/Common/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import React from 'react';
import GetJobByAnimalOrWorkerId from '../../components/Job/GetJobByAnimalOrWorkerId'; 
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
