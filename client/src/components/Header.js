import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import GlobalStyles from '@mui/material/GlobalStyles'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import Logo from '../assets/facebark logo_transparent_side.png'

//const pages = ['About', 'Contact', 'Features'];
const theme = createTheme({
  palette: {
    primary: {
      main: '#063970',
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
            backgroundColor: 'transparent',
            color: '#063970',
          }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters sx={{ flexWrap: 'wrap' }}>
              <img
                src={Logo}
                alt="Logo"
                style={{
                  display: 'flex',
                  height: '50px',
                  marginRight: '10px',
                  justifyContent: 'space-between',
                  padding: '4px 8px',
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
                    fontSize: '14px',
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
                    fontSize: '14px',
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
                    fontSize: '14px',
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
