import React from "react";
import Sidebar from "./sections/Sidebar/Sidebar";
import Appbar from "./layout/Appbar/Appbar";
import Events from "./sections/Events/Events";
import Playdate from "./sections/Playdate/Playdate";
import Learning from "./sections/Learning/Learning";
import News from "./sections/News/News";
import Logo from '../../../public/assets/logo/fb_white_transparent.png'

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Appbar/>
      <Logo />
      {/* reference in src instead, not as a react component */}
      <Events />
      <Playdate />
      <Learning />
      <News />
    </div>
  );
}
