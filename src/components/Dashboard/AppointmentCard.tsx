import React from 'react';

interface AppointmentCardProps {
  title: string;
  doctorName: string;
  time: string;
  icon: string;
  isSimple?: boolean;
  customBg?: string;
}

const AppointmentCard: React.FC<AppointmentCardProps> = ({
  title,
  doctorName,
  time,
  icon,
  customBg,
}) => {
  const isDark = customBg === '#00008B';

  return (
    <div
      className={`flex justify-between items-center p-4 rounded-xl shadow-sm border ${
        isDark ? 'text-white border-transparent' : 'text-gray-900 border-gray-100'
      }`}
      style={{ backgroundColor: customBg || '#E5EAF4' }} // Softer light blue fallback
    >
      <div>
        <h4 className={`text-sm font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
          {title}
        </h4>
        <p className={`text-xs mt-1 ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>{time}</p>
        <p className={`text-xs ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>{doctorName}</p>
      </div>
      <img src={icon} alt={title} className="w-10 h-10 object-contain ml-4" />
    </div>
  );
};

export default AppointmentCard;
