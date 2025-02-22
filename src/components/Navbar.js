import React from "react";
import { Sidebar, SidebarItem } from "D:/SI/src/style.js"; // Add `.js` extension

import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import InboxIcon from "@mui/icons-material/Inbox";
import HistoryIcon from "@mui/icons-material/History";
import HelpIcon from "@mui/icons-material/Help";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

const Navbar = () => {
  return (
    <Sidebar>
      <h2>Logo</h2>
      <SidebarItem>
        <DashboardIcon /> Dashboard
      </SidebarItem>
      <SidebarItem>
        <SchoolIcon /> Courses
      </SidebarItem>
      <SidebarItem>
        <CalendarTodayIcon /> Calendar
      </SidebarItem>
      <SidebarItem>
        <InboxIcon /> Inbox
      </SidebarItem>
      <SidebarItem>
        <HistoryIcon /> History
      </SidebarItem>
      <SidebarItem>
        <HelpIcon /> Help
      </SidebarItem>
      <SidebarItem>
        <LibraryBooksIcon /> Library
      </SidebarItem>
    </Sidebar>
  );
};

export default Navbar;
