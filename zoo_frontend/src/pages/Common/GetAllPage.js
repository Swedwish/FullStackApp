import Appbar from '../../components/Common/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import GetAllRows from '../../components/Common/GetAll'
import React from 'react';
import { useParams } from 'react-router';
//import { Link } from 'react-router-dom';
function GetAll() {
    const {className} = useParams();
    console.log(className);
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="HomePage">
                <Appbar />
                <GetAllRows argument={className} />
            </div>
        </LocalizationProvider>
    );
}

export default GetAll;