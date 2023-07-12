import * as React from 'react';
import { tokens } from '../../theme';
import { Box, useTheme } from "@mui/material";
import Drawer from './Drawer/Drawer';
import Appbar from './Appbar';
import GridComponent from './Grid/Grid';
// import Logo from '../../../public/assets/logo/fb_white_transparent.png'

function Dashboard() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <div>
      <Box>
        <Appbar />
        <Drawer />
        <GridComponent />
      </Box>
    </div>
  );
}

export default Dashboard;
