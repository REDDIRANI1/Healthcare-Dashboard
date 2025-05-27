import { 
  LayoutDashboard, 
  Clock, 
  Calendar, 
  CalendarClock, 
  BarChart2, 
  MessageSquare, 
  Phone,
  Settings 
} from 'lucide-react';

export interface NavLink {
  id: string;
  name: string;
  icon: React.ElementType;
  isActive?: boolean;
}

export const navigationLinks: NavLink[] = [
  {
    id: 'dashboard',
    name: 'Dashboard',
    icon: LayoutDashboard,
    isActive: true,
  },
  {
    id: 'history',
    name: 'History',
    icon: Clock,
  },
  {
    id: 'calendar',
    name: 'Calendar',
    icon: Calendar,
  },
  {
    id: 'appointments',
    name: 'Appointments',
    icon: CalendarClock,
  },
  {
    id: 'statistics',
    name: 'Statistics',
    icon: BarChart2,
  },
  {
    id: 'chat',
    name: 'Chat',
    icon: MessageSquare,
  },
  {
    id: 'support',
    name: 'Support',
    icon: Phone,
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: Settings,
  },
];
