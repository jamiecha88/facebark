import React from "react";
import Sidebar from "./sections/Sidebar/Sidebar";
import Appbar from "./sections/Appbar/Appbar";
import Events from "./sections/Events/Events";
import SchedulePlaydate from "./sections/Playdate/Playdate";
import LearningResources from "./sections/Learning/Learning";
import News from "./sections/News/News";
//import Calendar
import Avatar from '../../components/common/Avatar/Avatar'
//import Notification
import Logo from '../../../public/assets/logo/fb_white_transparent.png'

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Appbar/>
      <Logo />
      <Avatar />
      <Events />
      <SchedulePlaydate />
      <LearningResources />
      <News />
    </div>
  );
}
