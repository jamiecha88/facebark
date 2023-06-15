import React from "react";
import Sidebar from "./sections/Sidebar/Sidebar";
import Events from "./sections/Events/Events";
import SchedulePlaydate from "./sections/Playdate/Playdate";
import LearningResources from "./sections/Learning/Learning";
import News from "./sections/News/News";
//import Calendar (as a component?)
//import Avatar..top right icon to logout (as a component?)
//import notification?
//import logo

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Events />
      <SchedulePlaydate />
      <LearningResources />
      <News />
    </div>
  );
}
