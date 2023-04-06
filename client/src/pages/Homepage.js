import * as React from 'react';
import Container from '@mui/material/Container';
import { Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HomeImage from '../assets/park_people_dogs_homepage.png';


const sections = [ { title: '', url: "" }];

const theme = createTheme({
  palette: {
    primary: {
      main: '#171615',
    },
    secondary: {
      main: '#063970',
    },
  },
});

export default function Homepage() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" >
        <Header title="facebark" sections={sections} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 1rem)',
            paddingTop: '1rem',
          }}>
          <img
            src={ HomeImage }
            alt="HomeImg"
            style={{
              maxWidth: '70%', margin: 'auto', height: 'auto',
            }}
            />
        </Box>
        <Footer/>
      </Container>
    </ThemeProvider>
  );
};

