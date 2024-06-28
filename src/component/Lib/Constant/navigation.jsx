import { BiLogoDiscourse } from 'react-icons/bi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { RiParentLine } from 'react-icons/ri';
import { PiChalkboardTeacherLight } from 'react-icons/pi';
import { CiSettings } from 'react-icons/ci';
import { TfiSupport } from 'react-icons/tfi';
import { AiOutlineMessage } from "react-icons/ai";
export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dashboard',
    label: 'DASHBOARD',
    path: '/dashboard',
    icon: <LuLayoutDashboard />,
  },
  {
    key: 'course',
    label: 'COURSE',
    path: '/course',
    icon: <BiLogoDiscourse />,
  },
  {
    key: 'parents',
    label: 'PARENT',
    path: '/parent',
    icon: <RiParentLine />,
  },
  {
    key: 'instructors',
    label: 'INSTRUCTORS',
    path: '/instructor',
    icon: <PiChalkboardTeacherLight />,
  },
  // {
  // 	key: 'transactions',
  // 	label: 'Transactions',
  // 	path: '/transactions',
  // 	icon: <HiOutlineDocumentText />
  // },
  {
  	key: 'messages',
  	label: 'MESSAGES',
  	path: '/messages',
  	icon: <AiOutlineMessage />
  }
];

export const DASHBOARD_SIDEBAR_BOTTOM_LINKS = [
  {
    key: 'settings',
    label: 'Settings',
    path: '/settings',
    icon: <CiSettings />,
  },
  {
    key: 'support',
    label: 'Help & Support',
    path: '/support',
    icon: <TfiSupport />,
  },
];
