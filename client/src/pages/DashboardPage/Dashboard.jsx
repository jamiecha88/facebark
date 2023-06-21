import * as React from "react";
import PropTypes from "prop-types";
import Sidebar from "./layout/Sidebar/Sidebar";
import Appbar from "./layout/Appbar/Appbar";
// import Events from "./sections/Events/Events";
// import Playdate from "./sections/Playdate/Playdate";
// import Learning from "./sections/Learning/Learning";
// import News from "./sections/News/News";
// import Logo from '../../../public/assets/logo/fb_white_transparent.png'

function Dashboard() {
  return (
    <div>
      <Sidebar />
      <Appbar />
      {/* <Logo />
      <Events />
      <Playdate />
      <Learning />
      <News /> */}
    </div>
  );
}

Dashboard.propTypes = {
  window: PropTypes.func,
};

export default Dashboard;
