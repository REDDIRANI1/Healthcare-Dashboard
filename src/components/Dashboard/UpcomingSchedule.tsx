import React from 'react';
import { upcomingAppointments } from '../../data/appointments';
import AppointmentCard from './AppointmentCard';

import syringeIcon from '../../assets/syringe.png';
import eyeIcon from '../../assets/eye.jpg';
import heartIcon from '../../assets/h2.png';

import doctorIcon from '../../assets/doctor.png';

const UpcomingSchedule: React.FC = () => {
  // Split the appointments manually
  const onThursday = upcomingAppointments.slice(0, 2); // Health Checkup, Ophthalmologist
  const onSaturday = upcomingAppointments.slice(2, 4); // Cardiologist, Neurologist

  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-lg font-medium">The Upcoming Schedule</h2>
        {/* <button className="text-sm text-primary-600 hover:text-primary-700">See all</button> */}
      </div>

      {/* Thursday Appointments */}
      <h3 className="text-sm text-gray-500 font-medium mb-3">On Thursday</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
        <AppointmentCard
          title={onThursday[0].title}
          doctorName={onThursday[0].doctorName || ''}
          time={onThursday[0].time}
          icon={syringeIcon}
          isSimple
        />
        <AppointmentCard
          title={onThursday[1].title}
          doctorName={onThursday[1].doctorName || ''}
          time={onThursday[1].time}
          icon={eyeIcon}
          isSimple
        />
      </div>

      {/* Saturday Appointments */}
      <h3 className="text-sm text-gray-500 font-medium mb-3">On Saturday</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <AppointmentCard
          title={onSaturday[0].title}
          doctorName={onSaturday[0].doctorName || ''}
          time={onSaturday[0].time}
          icon={heartIcon}
          isSimple
        />
        <AppointmentCard
          title={onSaturday[1].title}
          doctorName={onSaturday[1].doctorName || ''}
          time={onSaturday[1].time}
          icon={doctorIcon}
          isSimple
        />
      </div>
    </div>
  );
};

export default UpcomingSchedule;
