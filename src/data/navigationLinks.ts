import { 
  LayoutDashboard, 
  Clock, 
  Calendar, 
  CalendarClock, 
  BarChart2, 
  ClipboardList, 
  MessageSquare, 
  HelpCircle, 
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
    id: 'tests',
    name: 'Tools',
    icon: ClipboardList,
  },
  {
    id: 'chat',
    name: 'Chat',
    icon: MessageSquare,
  },
  {
    id: 'support',
    name: 'Support',
    icon: HelpCircle,
  },
  {
    id: 'settings',
    name: 'Settings',
    icon: Settings,
  },
];