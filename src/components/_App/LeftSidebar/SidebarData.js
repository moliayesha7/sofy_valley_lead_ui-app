import React from "react";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import DashboardIcon from '@mui/icons-material/Dashboard';
import BackupTableIcon from '@mui/icons-material/BackupTable';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import ShowChartIcon from '@mui/icons-material/ShowChart';
export const SidebarData = [
  // {
  //   title: "Dashboard",
  //   path: "/",
  //   icon: <DashboardIcon />,

  // },
  {
    title: "Leads",
    path: "/",
    icon: <PersonSearchIcon />,

  },
  {
    title: "Customer",
    path: "/pages/invoice/",
    icon: <PeopleAltIcon />,
  },
  {
    title: "Sales",
    path: "/email/inbox/",
    icon: <ShowChartIcon />,
    iconClosed: <KeyboardArrowRightIcon />,
    iconOpened: <KeyboardArrowDownIcon />,

    subNav: [
      {
        title: "Read Email",
        path: "/email/read-email/",
      },
    ],
  },
  {
    title: "Expense",
    path: "/contact-list/",
    icon: <BackupTableIcon />,
  
  },
  
];
