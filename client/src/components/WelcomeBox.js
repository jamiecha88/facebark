import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function WelcomeBox() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography variant="h4"
        sx={{
          color: "#042140",
          fontFamily: 'Roboto',
          fontSize: '2rem',
          fontWeight: '400',
          backgroundColor: 'transparent',
        }}>
        Connect your furry friend with nearby buddies today!
      </Typography>
    </Box>
  );
}


//add 'Get Started' button










