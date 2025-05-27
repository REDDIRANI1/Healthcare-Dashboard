export interface Appointment {
  id: string;
  title: string;
  doctorName?: string;
  date: string;
  time: string;
  type: 'checkup' | 'consultation' | 'operation' | 'therapy' | 'test';
  status: 'upcoming' | 'completed' | 'cancelled';
  department?: string;
  icon?: string;
}

export const calendarAppointments = [
  { day: 5, time: '09:00' },
  { day: 12, time: '11:00' },
  { day: 18, time: '13:00' },
  { day: 23, time: '15:00' },
];

export const upcomingAppointments: Appointment[] = [
  {
    id: 'app1',
    title: 'Health checkup complete',
    date: '2023-10-19',
    time: '11:00 AM',
    type: 'checkup',
    status: 'completed',
    department: 'General Medicine',
  },
  {
    id: 'app2',
    title: 'Ophthalmologist',
    date: '2023-10-19',
    time: '14:00 PM',
    type: 'consultation',
    status: 'upcoming',
    department: 'Ophthalmology',
  },
  {
    id: 'app3',
    title: 'Cardiologist',
    date: '2023-10-21',
    time: '12:00 AM',
    type: 'consultation',
    status: 'upcoming',
    department: 'Cardiology',
  },
  {
    id: 'app4',
    title: 'Neurologist',
    date: '2023-10-21',
    time: '16:00 PM',
    type: 'consultation',
    status: 'upcoming',
    department: 'Neurology',
  },
];

export const dentistAppointment = {
  id: 'dent1',
  title: 'Dentist',
  time: '09:00-11:00',
  doctorName: 'Dr. Cameron Williamson',
  type: 'checkup',
  status: 'upcoming',
  department: 'Dental',
};

export const physiotherapyAppointment = {
  id: 'phys1',
  title: 'Physiotherapy Appointment',
  doctorName: 'Dr. Kevin Djones',
  date: '2023-10-18',
  time: '11:00-12:00',
  type: 'therapy',
  status: 'upcoming',
  department: 'Physiotherapy',
};

export const activityData = [
  { day: 'Mon', values: [3, 2, 1] },
  { day: 'Tue', values: [2, 1, 3] },
  { day: 'Wed', values: [1, 3, 2] },
  { day: 'Thu', values: [4, 2, 3] },
  { day: 'Fri', values: [3, 1, 2] },
  { day: 'Sat', values: [5, 3, 4] },
  { day: 'Sun', values: [2, 2, 1] },
];
