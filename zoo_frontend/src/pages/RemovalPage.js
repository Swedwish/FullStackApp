import Appbar from '../components/Appbar';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import Deleter from '../components/Deleter'
import React from 'react';
import { useParams } from 'react-router';
//import { Link } from 'react-router-dom';
function Removal() {
    const {className} = useParams();
    console.log(className);
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="HomePage">
                <Appbar />
                <Deleter argument={className} />
            </div>
        </LocalizationProvider>
    );
}

export default Removal;