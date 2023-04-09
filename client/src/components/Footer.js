import * as React from 'react'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import GlobalStyles from '@mui/material/GlobalStyles'
import { Grid } from '@mui/material'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Socials from '../components/Socials'

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

export default function Footer() {
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <ThemeProvider theme={theme}>
        <Grid
          component="footer"
          direction="row"
          alignItems="center"
          sx={{
            py: 2,
            px: 1,
            mt: 'auto',
            backgroundColor: '#F5EED3',
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            borderTop: (theme) => `1px solid ${theme.palette.divider}`
          }}
        >
          <Container
            sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}
          >
            <Typography variant="body1" color="#042140" mr={1}>
              © 2023 facebark. All rights reserved.
            </Typography>
            <Socials />
          </Container>
        </Grid>
      </ThemeProvider>
    </React.Fragment>
  )
}
