//include hyperlinks for Account, Events, Friends, Feed, Settings, etc.

import React from 'react';
import Account from  '../pages/AccountPage/Account'
import Notifications from '../pages/UserPage/DashboardPage/sections/Notifications'
import Friends from '../pages/UserPage/DashboardPage/sections/Friends'
import Messages from '../pages/UserPage/DashboardPage/sections/Messages'

export default function UserDashboard(){
    return (
        <div>
          <Account />
          <Notifications />
          <Friends />
          <Messages />
          {/* Other content */}
        </div>
      );
}