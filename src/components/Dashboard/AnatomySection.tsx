import React from 'react';
import { Heart, Settings as Lungs, Stethoscope, Bone, ZoomIn } from 'lucide-react';
import bodyImg from '../../assets/body.jpg';
import lungsImg from '../../assets/lungs.png';
import teethImg from '../../assets/tooth.png';
import boneImg from '../../assets/bone.png';
import healthIndicators from '../../data/healthIndicators';
import heartIcon from '../../assets/heart.png';
import legIcon from '../../assets/leg.png';
import './AnatomySection.css'; 
const AnatomySection: React.FC = () => {
 const getIndicatorIcon = (id: string) => {
  switch (id) {
    case 'heart':
      return <Heart className="h-3 w-3" />; // Increased from h-3 w-3
    case 'lungs':
      return <img src={lungsImg} alt="Lungs" className="h-6 w-6" />; // Increased from h-4 w-4
    case 'tooth':
      return <img src={teethImg} alt="Teeth" className="h-6 w-6" />;
    case 'bone':
      return <img src={boneImg} alt="Bone" className="h-6 w-6" />;
    default:
      // return <Stethoscope className="h-5 w-5" />;
  }
};


  return (
    <div className="anatomy-container relative mb-4 md:mb-0">
      <div className="relative">
        {/* Human Body Image */}
        <img
          src={bodyImg}
          alt="Anatomical Model"
          className="anatomy-image"
        />

        {/* Zoom Icon Positioned to Top-Right */}
        <button
          className="absolute top-2 right-2 text-gray-700 hover:text-gray-900 transition"
          title="Zoom"
        >
          <ZoomIn className="h-5 w-5" />
        </button>

        {/* Health Indicators */}
        {healthIndicators.map((item, idx) => (
          <div
            key={idx}
            className="indicator-bubble"
            style={{
              top: item.position.top,
              left: item.position.left,
              backgroundColor: item.statusColor,
            }}
          >
            {getIndicatorIcon(item.organ)} 
            <span className="flex items-center gap-1 text-sm font-semibold text-white drop-shadow-sm">

      {/* Show image before label */}
      {item.organ === 'Heart' && (
        <img src={heartIcon} alt="Heart Icon" className="h-3 w-90]" />
      )}
      {item.organ === 'Leg' && (
        <img src={legIcon} alt="Leg Icon" className="h-4 w-4" />
      )}
      {item.label}
    </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnatomySection;
