import React from 'react';
import Appbar from '../components/Appbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const HomePage = () => {
  return (
    <div>
      <Appbar />
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="0vh">
        <Box width="80%" p={2}>
          <Typography variant="h4" component="div">
            Welcome to the Zoo Database Web Interface
          </Typography>
          <Typography variant="body1" style={{ margin: '20px', textAlign: 'left' }}>
            Hello and welcome to our Zoo Database Web Interface. We are excited to provide you with a user-friendly platform that allows you to explore and manage data related to our zoo.
          </Typography>
          {/* Add the rest of your content here */}
        </Box>
      </Box>
    </div>
  );
};

export default HomePage;