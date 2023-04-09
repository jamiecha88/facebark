import * as React from 'react'
import Container from '@mui/material/Container'
import { Box } from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Header from '../components/Header'
import Footer from '../components/Footer'
import HomeImage from '../assets/green_dogs_multiple_transparent.png'

const sections = [{ title: '', url: '' }]

const theme = createTheme({
  palette: {
    primary: {
      main: '#171615',
    },
    secondary: {
      main: '#042140',
    },
  },
})

export default function Homepage() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ backgroundColor: '#B4D0A8' }}>
        <Header title="facebark" sections={sections} />
        <Container maxWidth="lg">
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
            }}
          />
        </Box>
        <Footer />
      </Container>
      </Box>
    </ThemeProvider>

  )
}
