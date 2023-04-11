import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import Logo from '../assets/swirly_logo_blue_transparent.png'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import GlobalStyles from '@mui/material/GlobalStyles'

//const pages = ['About', 'Contact', 'Features'];
const theme = createTheme({
  palette: {
    primary: {
      main: '#042140',
    },
    secondary: {
      main: '#171615',
    },
  },
})

export default function Header(props) {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />

      <ThemeProvider theme={theme}>
        <AppBar
          position="fixed"
          elevation={0}
          sx={{
            borderBottom: (theme) => `1px solid ${theme.palette.divider}`,
            backgroundColor: '#F7FFF4',
            color: '#042140',
            height: '65px',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ flexWrap: 'wrap' }}>
              <img
                src={Logo}
                alt="Logo"
                style={{
                  display: 'flex',
                  height: '55px',
                  marginRight: '10px',
                  justifyContent: 'center',
                  padding: '3px 100px',
                  alignItems: 'center',
                  maxWidth: '100%',
                }}
              />
              <Typography
                variant="h6"
                noWrap
                //component="a"
                href="/"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  flexGrow: 1,
                  fontWeight: 400,
                  fontFamily: 'Roboto',
                }}
              ></Typography>
              <nav>
                <Link
                  variant="button"
                  color="inherit"
                  href="#"
                  sx={{
                    my: 1,
                    mx: 1.5,
                    textDecoration: 'none',
                    textTransform: 'none',
                    fontSize: '16px',
                  }}
                >
                  About
                </Link>

                <Link
                  variant="button"
                  color="inherit"
                  href="#"
                  sx={{
                    my: 1,
                    mx: 1.5,
                    textDecoration: 'none',
                    textTransform: 'none',
                    fontSize: '16px',
                  }}
                >
                  Contact
                </Link>

                <Link
                  variant="button"
                  color="inherit"
                  href="#"
                  sx={{
                    my: 1,
                    mx: 1.5,
                    textDecoration: 'none',
                    textTransform: 'none',
                    fontSize: '16px',
                  }}
                >
                  Features
                </Link>
              </nav>
              <Button
                href="#"
                variant="outlined"
                sx={{
                  my: 1,
                  mx: 1.5,
                  color: 'primary.main',
                }}
              >
                Login
              </Button>
            </Toolbar>
          </Container>
        </AppBar>
      </ThemeProvider>
    </React.Fragment>
  )
}
