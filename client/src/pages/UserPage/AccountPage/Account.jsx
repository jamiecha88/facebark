import React from "react";
import Settings from "../pages/UserPage/AccountPage/sections/Settings";
import Profile from "../pages/UserPage/AccountPage/sections/Profile";
import Appearance from "../pages/UserPage/AccountPage/sections/Appearance";


export default function UserAccount() {
  return (
    <div>
      <Settings />
      <Profile />
      <Appearance />
    </div>
  );
}
