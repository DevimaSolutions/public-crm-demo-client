import Login from '@/views/Login';
import ForgotPassword from '@/views/ForgotPassword';
import Dashboard from '@/views/User/Dashboard';
import Reports from '@/views/User/Reports';
import UserTimeOff from '@/views/User/TimeOff';
import Users from '@/views/Admin/Users';
import Results from '@/views/Admin/Results';
import Projects from '@/views/Admin/Projects';
import AdminTimeOff from '@/views/Admin/TimeOff';
import {
  PeopleOutlineOutlined,
  Dashboard as DashboardIcon,
  Description,
  TrendingUp,
  CardTravel,
  EventNote,
} from '@material-ui/icons';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    exact: true,
    isUnauthorized: true,
    isPublic: true,
    isSidebar: false,
    permissions: [],
  },
  {
    path: '/forgot-password',
    name: 'Forgot password',
    component: ForgotPassword,
    exact: true,
    isUnauthorized: true,
    isPublic: true,
    isSidebar: false,
    permissions: [],
  },
  {
    path: '/',
    name: 'Users',
    component: Users,
    exact: true,
    isUnauthorized: false,
    isPublic: false,
    isSidebar: true,
    icon: PeopleOutlineOutlined,
    permissions: ['Admin'],
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    exact: true,
    isUnauthorized: false,
    isPublic: false,
    isSidebar: true,
    icon: CardTravel,
    permissions: ['Admin'],
  },
  {
    path: '/results',
    name: 'Results',
    component: Results,
    exact: true,
    isUnauthorized: false,
    isPublic: false,
    isSidebar: true,
    icon: TrendingUp,
    permissions: ['Admin'],
  },
  {
    path: '/time-off',
    name: 'Time off',
    component: AdminTimeOff,
    exact: true,
    isUnauthorized: false,
    isPublic: false,
    isSidebar: true,
    icon: EventNote,
    permissions: ['Admin'],
  },
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
    exact: true,
    isUnauthorized: false,
    isPublic: false,
    isSidebar: true,
    icon: DashboardIcon,
    permissions: ['User'],
  },
  {
    path: '/reports',
    name: 'Reports',
    component: Reports,
    exact: true,
    isUnauthorized: false,
    isPublic: false,
    isSidebar: true,
    icon: Description,
    permissions: ['User'],
  },
  {
    path: '/time-off',
    name: 'Time off',
    component: UserTimeOff,
    exact: true,
    isUnauthorized: false,
    isPublic: false,
    isSidebar: true,
    icon: EventNote,
    permissions: ['User'],
  },
];

export default routes;
