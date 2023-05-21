//include hyperlinks for Account, Events, Friends, Feed, Settings, etc.

import React from 'react';
import Account from  '../pages/AccountPage/Account'
import Notifications from '../pages/UserPage/DashboardPage/sections/Notifications'
import Friends from '../pages/UserPage/DashboardPage/sections/Friends'
import Messages from '../pages/UserPage/DashboardPage/sections/Messages'
import Bio from '../pages/UserPage/DashboardPage/sections/Bio'
import Events from '../pages/UserPage/DashboardPage/sections/Events'
import Settings from '../pages/UserPage/SettingsPage/Settings'
import Shop from '../pages/UserPage/DashboardPage/sections/Shop'
import Feed from '../pages/UserPage/DashboardPage/sections/Feed'
import Calendar from '../pages/UserPage/DashboardPage/sections/Calendar'
import Map from '../pages/UserPage/DashboardPage/sections/Map'

export default function UserDashboard(){
    return (
        <div>
          <Account />
            {/* pop up -person icon at bottom left corner -shows logged in user and option to log out */}
          <Notifications />
          <Friends />
          <Messages />
          <Events />
          <Settings />
          <Shop />
          <Feed />
          <Calendar />
          <Map />
          <Bio />
        </div>
      );
}