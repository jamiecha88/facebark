import * as React from "react";
import Drawer from "@mui/material/Drawer";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import {
  ExploreOutlined as ExploredOutlinedIcon,
  PeopleAltOutlined as PeopleAltOutlinedIcon,
  MailOutlined as MailOutlinedIcon,
  FmdGoodOutlined as FmdGoodOutlinedIcon,
  PetsOutlined as PetsOutlinedIcon,
  SettingsOutlined as SettingsOutlinedIcon,
} from "@mui/icons-material";

const drawerWidth = 240;

const items = [
  { text: "Explore", icon: <ExploredOutlinedIcon /> },
  { text: "Friends", icon: <PeopleAltOutlinedIcon /> },
  { text: "Messages", icon: <MailOutlinedIcon /> },
  { text: "Maps", icon: <FmdGoodOutlinedIcon /> },
  { text: "Profile", icon: <PetsOutlinedIcon /> },
  { text: "Settings", icon: <SettingsOutlinedIcon /> },
];

function Sidebar(props) {
  const { mobileOpen, handleDrawerToggle } = props;

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {items.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton>
              <ListItemIcon
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  fontSize: "2em",
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  const container = window !== undefined ? window.document.body : undefined;

  return (
    <nav
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      {/* Swap with js to avoid SEO duplication of links */}
      <Drawer
        container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile
        }}
        sx={{
          display: { xs: "block", sm: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
        }}
        open
      >
        {drawer}
      </Drawer>
    </nav>
  );
}

export default Sidebar;
