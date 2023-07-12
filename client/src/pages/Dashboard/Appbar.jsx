import * as React from "react";
import Typography from "@mui/material/Typography";
import { AppBar, IconButton, Toolbar } from "@mui/material";
//logo

const drawerWidth = 240;

function AppBarMenu(props) {
  const { handleDrawerToggle } = props;

  return (
    <AppBar
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        ></IconButton>
        <Typography variant="h6" noWrap component="div">
          Hello User
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default AppBarMenu;
