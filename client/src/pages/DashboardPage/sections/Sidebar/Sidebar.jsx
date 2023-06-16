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
  Inbox as InboxIcon,
  Mail as MailIcon,
  Star as StarIcon,
  Drafts as DraftsIcon,
  MarkunreadMailbox as AllMailIcon,
  Delete as DeleteIcon,
  Report as SpamIcon,
} from "@mui/icons-material";

const drawerWidth = 240;

export default function Sidebar() {
  const items = [
    { text: "Inbox", icon: <InboxIcon /> },
    { text: "Starred", icon: <StarIcon /> },
    { text: "Messages", icon: <MailIcon /> },
    { text: "Drafts", icon: <DraftsIcon /> },
    { text: "All Mail", icon: <AllMailIcon /> },
    { text: "Trash", icon: <DeleteIcon /> },
    { text: "Spam", icon: <SpamIcon /> },
  ];

  return (
    <Box sx={{ display: "flex" }}>
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
                <ListItemIcon sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>{item.icon}</ListItemIcon>
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
          Lorem ipsum dolor sit amet, tempor incididunt ut labore et dolore
          magna aliqua.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit.
        </Typography>
      </Box>
    </Box>
  );
}
