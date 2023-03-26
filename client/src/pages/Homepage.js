import * as React from 'react';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Header from '../components/Header';

const sections = [ { title: '', url: "" }];

const theme = createTheme();

export default function Homepage() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header title="facebark" sections={sections} />
      </Container>
    </ThemeProvider>
  );
};

