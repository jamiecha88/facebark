import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Social from "../components/Socials"

const theme = createTheme();

export default function Footer() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
        <ThemeProvider theme={theme}>
          <Box
            component="footer"
            sx={{
              py: 3,
              px: 2,
              mt: 'auto',
              backgroundColor: '#edf5fe',
              position: 'fixed',
              bottom: 0,
              left: 0,
              width: '100vw',
            }}
          >
            <Container >
              <Typography variant="body1" color="#04264b">
                © 2023 facebark. All rights reserved.
              </Typography>
            </Container>
          </Box>
          <Social/>
        </ThemeProvider>
    </React.Fragment>
  );
}