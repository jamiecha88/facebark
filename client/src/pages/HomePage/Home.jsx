import * as React from 'react';
import { Box, Container, Grid } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import styles from './home.module.css';
//import About, Contact, Features
import Header from './layout/Header';
import Footer from './layout/Footer';
import HomeImage from '../assets/green_dogs_multiple_transparent.png';

// Global styles using makeStyles or theme
const useStyles = makeStyles((theme) => ({
  // Global style rules go here
  root: {
    // ...
  },
}));


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

export default function LandingPage() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#B4D0A8' }}>
        <Header title="facebark" sections={sections} />
        <Container maxWidth="lg">
          <Grid container sx={{ paddingTop: '1rem' }}>
            <Grid item xs={12} md={6}>
              <Box
                className={styles.imageContainer}
              >
                <img
                  src={HomeImage}
                  alt="HomeImg"
                  className={styles.homeImage}
                />
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                className={styles.contentContainer}
              >

              </Box>
            </Grid>
          </Grid>
          <Footer />
        </Container>
      </Box>
    </ThemeProvider>
  );
}