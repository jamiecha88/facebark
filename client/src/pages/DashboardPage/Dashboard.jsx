//include hyperlinks for Account, Events, Friends, Feed, Settings, etc.

import React from "react";
import Account from "../pages/AccountPage/Account";
import Events from "../DashboardPage/sections/Events";
import Friends from ".sections/Friends/Friends";
import Map from "./sections/Map/Map";
import Messages from "./sections/Messages/Messages";
import Settings from "../pages/SettingsPage/Settings";
import Sidebar from "../pages/DashboardPage/sections/Sidebar";

export default function Dashboard() {
  return (
    <div>
      <Account />
      <Events />
      <Friends />
      <Map />
      <Messages />
      <Settings />
      <Sidebar />
    </div>
  );
}
