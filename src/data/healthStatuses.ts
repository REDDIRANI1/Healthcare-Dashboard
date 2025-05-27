export type HealthStatus = 'healthy' | 'warning' | 'critical';

export interface HealthIndicator {
  id: string;
  name: string;
  status: HealthStatus;
  position: {
    top: string;
    left: string;
  };
  lastCheckup?: string;
  nextCheckup?: string;
}

export const healthIndicators: HealthIndicator[] = [
  {
    id: 'heart',
    name: 'Heart',
    status: 'healthy',
    position: {
      top: '30%',
      left: '50%',
    },
    lastCheckup: '2023-05-15',
    nextCheckup: '2024-05-15',
  },
  {
    id: 'lungs',
    name: 'Lungs',
    status: 'critical',
    position: {
      top: '32%',
      left: '54%',
    },
    lastCheckup: '2023-06-20',
    nextCheckup: '2023-12-20',
  },
  {
    id: 'teeth',
    name: 'Teeth',
    status: 'warning',
    position: {
      top: '18%',
      left: '50%',
    },
    lastCheckup: '2023-04-10',
    nextCheckup: '2023-10-10',
  },
  {
    id: 'bone',
    name: 'Bone',
    status: 'healthy',
    position: {
      top: '60%',
      left: '46%',
    },
    lastCheckup: '2023-07-05',
    nextCheckup: '2024-07-05',
  },
];

export const healthStatusDetails = [
  {
    id: 'lungs',
    name: 'Lungs',
    status: 'critical',
    date: 'Oct 20, 2023',
    description: 'Needs immediate attention',
  },
  {
    id: 'teeth',
    name: 'Teeth',
    status: 'warning',
    date: 'Oct 10, 2023',
    description: 'Dental checkup required',
  },
  {
    id: 'bone',
    name: 'Bone',
    status: 'healthy',
    date: 'Jul 05, 2023',
    description: 'All parameters normal',
  },
];