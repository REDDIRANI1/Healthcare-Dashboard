import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  dentistAppointment,
  physiotherapyAppointment,
} from '../../data/appointments';
import AppointmentCard from './AppointmentCard';
import toothIcon from '../../assets/tooth.png';
import muscleIcon from '../../assets/m2.jpg';

const CalendarView: React.FC = () => {
  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const week1 = [25, 26, 27, 28, 29, 30, 31];
  const week2 = ['10:00', '08:00', '12:00', '10:00', '___ ', '12:00', '09:00'];
  const week3 = ['11:00', '09:00', '___', '11:00', '14:00', '14:00', '10:00'];  
  const week4 = ['12:00', '10:00', '13:00', '___', '16:00', '15:00', '11:00'];

  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-medium">Calendar 2021</h2>
        <div className="flex items-center gap-2">
          <button className="p-1 rounded-full hover:bg-gray-100">
            <ChevronLeft className="h-4 w-4 text-gray-500" />
          </button>
          <span className="text-sm font-medium">October 2021</span>
          <button className="p-1 rounded-full hover:bg-gray-100">
            <ChevronRight className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-4">
        {weekDays.map((day) => (
          <div key={day} className="text-center text-xs font-medium text-gray-500">
            {day}
          </div>
        ))}

        {week1.map((day, _idx) => (
          <div key={`day-${day}`} className="flex flex-col items-center">
            <div className="calendar-day">{day}</div>
          </div>
        ))}

        {/* Week 2 with gray highlights */}
        {week2.map((time, idx) => {
          const isGraySlot = (idx === 5 && time === '12:00') || (idx === 6 && time === '09:00');
          return (
            <div
              key={`w2-${idx}`}
              className={`flex flex-col items-center justify-center h-8 w-full rounded ${
                isGraySlot ? 'bg-gray-200 font-medium' : ''
              }`}
            >
              <div className={`text-xs ${isGraySlot ? 'text-gray-700' : 'text-gray-600'}`}>
                {time !== '-' ? time : ''}
              </div>
            </div>
          );
        })}

        {/* Week 3 with dark blue and gray highlights */}
        {week3.map((time, idx) => {
          const isTuesday9am = idx === 1 && time === '09:00';       // dark blue
          const isThursday11am = idx === 3 && time === '11:00';     // gray
          return (
            <div
              key={`w3-${idx}`}
              className={`flex flex-col items-center justify-center h-8 w-full rounded ${
                isTuesday9am ? 'bg-[#00008B] font-semibold' :
                isThursday11am ? 'bg-gray-200 font-medium' : ''
              }`}
            >
              <div className={`text-xs ${
                isTuesday9am ? 'text-white' :
                isThursday11am ? 'text-gray-700' :
                'text-gray-600'
              }`}>
                {time !== '-' ? time : ''}
              </div>
            </div>
          );
        })}

        {week4.map((time, idx) => (
          <div key={`w4-${idx}`} className="flex flex-col items-center">
            <div className="text-xs text-gray-600">{time !== '-' ? time : ''}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AppointmentCard
          title={dentistAppointment.title}
          doctorName={dentistAppointment.doctorName || ''}
          time={dentistAppointment.time}
          icon={toothIcon}
          customBg="#00008B"
        />
        <AppointmentCard
          title={physiotherapyAppointment.title}
          doctorName={physiotherapyAppointment.doctorName || ''}
          time={physiotherapyAppointment.time}
          icon={muscleIcon}
          customBg="#E5EAF4"
        />
      </div>
    </div>
  );
};

export default CalendarView;
