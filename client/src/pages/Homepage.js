import * as React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';
import Footer from '../components/Footer';

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
        <Footer/>
      </Container>
    </ThemeProvider>
  );
};

