import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

//not the events card yet

function TwoByTwo() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '64px' }}>
                <Box sx={{ width: '240px' }}>{/* Add your x component here */}</Box>
                <Box sx={{ flex: 1 }}>
                    <Box sx={{ width: '100%', padding: '16px' }}>
                        <Grid
                            container
                            spacing={2}
                            direction={{ xs: 'column', sm: 'row' }}
                            justifyContent="center"
                            alignItems="center"
                        >
                            <Grid item xs={12} sm={6}>
                                <Item>1</Item>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Item>2</Item>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Item>3</Item>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <Item>4</Item>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default TwoByTwo