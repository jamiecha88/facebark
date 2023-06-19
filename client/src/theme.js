import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#171615',
        },
        secondary: {
            main: '#042140',
        },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif'
    },
});

export default theme;