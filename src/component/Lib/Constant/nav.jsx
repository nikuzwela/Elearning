import { BiLogoDiscourse } from 'react-icons/bi';
import { LuLayoutDashboard } from 'react-icons/lu';
import { RiParentLine } from 'react-icons/ri';
import { PiChalkboardTeacherLight } from 'react-icons/pi';
import { CiSettings } from 'react-icons/ci';
import { TfiSupport } from 'react-icons/tfi';
import { LiaBookSolid } from 'react-icons/lia';
export const DASHBOARD_SIDEBAR_LINKS = [
  {
    key: 'dash',
    label: 'DASHBOARD',
    path: '/dash',
    icon: <LuLayoutDashboard />,
  },
  {
    key: 'books',
    label: 'BOOKS',
    path: '/book',
    icon: <LiaBookSolid />,
  },
  //   {
  //     key: 'parents',
  //     label: 'PARENT',
  //     path: '/parent',
  //     icon: <RiParentLine />,
  //   },
  {
    key: 'pinstructors',
    label: 'INSTRUCTORS',
    path: '/pinstructor',
    icon: <PiChalkboardTeacherLight />,
  },
  // {
  // 	key: 'transactions',
  // 	label: 'Transactions',
  // 	path: '/transactions',
  // 	icon: <HiOutlineDocumentText />
  // },
  // {
  // 	key: 'messages',
  // 	label: 'Messages',
  // 	path: '/messages',
  // 	icon: <HiOutlineAnnotation />
  // }
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
