import React from 'react';
import { healthStatusDetails } from '../../data/healthStatuses';
import lungsImg from '../../assets/lungs.png';
import teethImg from '../../assets/tooth.png';
import boneImg from '../../assets/bone.png';

const HealthStatusCards: React.FC = () => {
  const getStatusIcon = (id: string) => {
    switch (id) {
      case 'lungs':
        return <img src={lungsImg} alt="Lungs" className="h-5 w-5" />;
      case 'teeth':
        return <img src={teethImg} alt="Teeth" className="h-5 w-5" />;
      case 'bone':
        return <img src={boneImg} alt="Bone" className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const getProgressColor = (id: string) => {
    switch (id) {
      case 'lungs':
        return 'bg-red-500';
      case 'teeth':
        return 'bg-green-500';
      case 'bone':
        return 'bg-orange-400';
      default:
        return 'bg-gray-400';
    }
  };

  const getProgressWidth = (id: string) => {
    switch (id) {
      case 'lungs':
        return 'w-[70%]';
      case 'teeth':
        return 'w-[70%]';
      case 'bone':
        return 'w-[70%]';
      default:
        return 'w-[40%]';
    }
  };

  const getCardBg = (id: string) => {
    // Add a light blue background for lungs, teeth, and bone
    return ['lungs', 'teeth', 'bone'].includes(id)
      ? 'bg-blue-50'
      : 'bg-white';
  };

  return (
    <div className="w-full max-w-[300px] space-y-3">
      {healthStatusDetails.map((item) => (
        <div
          key={item.id}
          className={`flex items-center p-3 rounded-lg shadow-sm transition-colors ${getCardBg(item.id)}`}
        >
          {/* Icon Circle */}
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-gray-100">
            {getStatusIcon(item.id)}
          </div>

          {/* Text Info */}
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium">{item.name}</p>
            <p className="text-xs text-gray-500">{item.date}</p>

            {/* Progress Bar */}
            <div className="mt-1 h-2 w-full bg-gray-200 rounded-full overflow-hidden">
              <div
                className={`h-full ${getProgressColor(item.id)} ${getProgressWidth(item.id)} rounded-full`}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
