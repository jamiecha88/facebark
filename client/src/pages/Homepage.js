import * as React from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeImage from '../assets/green_dogs_multiple.png'

const sections = [{ title: '', url: '' }]

const theme = createTheme({
  palette: {
    primary: {
      main: '#171615',
    },
    secondary: {
      main: '#063970',
    },
  },
})

export default function Homepage() {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Header title="facebark" sections={sections} />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: 'calc(100vh - 1rem)',
            paddingTop: '1rem',
          }}
        >
          <img
            src={HomeImage}
            alt="HomeImg"
            style={{
              maxWidth: '70%',
              margin: '0 1rem 1rem 0',
              height: '450px',
              marginLeft: '-60%',
              borderRadius: '20px',
              boxShadow: '2px 2px 5px rgba(0, 0, 0, 0.3)',
            }}
          />
        </Box>
        <Footer />
      </Container>
    </ThemeProvider>
  )
}
