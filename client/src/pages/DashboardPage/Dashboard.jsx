import React from "react";
import Sidebar from "./sections/Sidebar/Sidebar";
import Events from "./sections/Events/Events";
import SchedulePlaydate from "./sections/Playdate/Playdate";
import LearningResources from "./sections/Learning/Learning";
import News from "./sections/News/News";
//import Calendar (as a component?)
import Avatar from '../../components/common/Avatar/Avatar'
//import notification?
import Logo from '../../../public/assets/logo/fb_white_transparent.png'

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Logo />
      <Avatar />
      <Events />
      <SchedulePlaydate />
      <LearningResources />
      <News />
    </div>
  );
}
