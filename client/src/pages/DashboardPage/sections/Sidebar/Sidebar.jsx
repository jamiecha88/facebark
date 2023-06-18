import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import {
  ExploreOutlined as ExploredOutlinedIcon,
  PeopleAltOutlined as PeopleAltOutlinedIcon,
  MailOutlined as MailOutlinedIcon,
  FmdGoodOutlined as FmdGoodOutlinedIcon,
  PetsOutlined as PetsOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon
} from "@mui/icons-material";

const drawerWidth = 240;

export default function Sidebar() {
  const items = [
    { text: "Explore", icon: <ExploredOutlinedIcon /> },
    { text: "Friends", icon: <PeopleAltOutlinedIcon /> },
    { text: "Messages", icon: <MailOutlinedIcon /> },
    { text: "Maps", icon: <FmdGoodOutlinedIcon /> },
    { text: "Profile", icon: <PetsOutlinedIcon /> },
    { text: "Settings", icon: <SettingsOutlinedIcon /> }
  ];
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            Hello User
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <List >
          {items.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton sx={{ justifyContent: 'center' }}>
                <ListItemIcon sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', fontSize: '2em' }}>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <Typography paragraph>
          A bunch of text here.
        </Typography>
        <Typography paragraph>
          More text down here.
        </Typography>
      </Box>
    </Box>
  );
}
