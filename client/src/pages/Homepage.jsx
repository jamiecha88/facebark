import * as React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeImage from '../assets/green_dogs_multiple_transparent.png';
import WelcomeBox from '../components/WelcomeBox';

const sections = [{ title: '', url: '' }];

const theme = createTheme({
  palette: {
    primary: {
      main: '#171615',
    },
    secondary: {
      main: '#042140',
    },
  },
});

export default function Homepage() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#B4D0A8' }}>
        <Header title="facebark" sections={sections} />
        <Container maxWidth="lg">
          <Grid container sx={{ paddingTop: '1rem' }}>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  height: 'calc(100vh - 1rem)',
                }}
              >
                <img
                  src={HomeImage}
                  alt="HomeImg"
                  style={{
                    maxWidth: '500px',
                    minWidth: '50px',
                    margin: '1rem',
                    height: 'auto',
                    backgroundColor: 'transparent',
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: 'calc(100vh - 1rem)' }}>
                <WelcomeBox />
              </Box>
            </Grid>
          </Grid>
          <Footer />
        </Container>
      </Box>
    </ThemeProvider>
  );
}
