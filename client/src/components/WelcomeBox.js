import * as React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'

export default function WelcomeBox() {
  return (
    <Box sx={{ width: '100%', maxWidth: 500 }}>
      <Typography
        variant="h4"
        sx={{
          color: '#042140',
          fontFamily: 'Roboto',
          fontSize: '2rem',
          fontWeight: '400',
          backgroundColor: 'transparent',
        }}
      >
        Connect your furry friend with nearby buddies today!
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          mt: 2,
        }}
      >
        <Button variant="contained" color="primary">
          Sign In
        </Button>
        <Button variant="outlined" color="primary" sx={{ ml: 1 }}>
          Get Started
        </Button>
      </Box>
    </Box>
  )
}

