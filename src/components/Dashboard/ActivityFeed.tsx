import React from 'react';
import { activityData } from '../../data/appointments';

const barColors = ['#0dd3c0', '#5038ED', '#d1d5db']; // Teal, Purple, Gray

const ActivityFeed: React.FC = () => {
  const allValues = activityData.flatMap(item => item.values);
  const maxValue = Math.max(...allValues, 1);

  return (
    <div className="bg-white rounded-xl shadow-sm p-5">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium text-gray-800">Activity</h2>
        <p className="text-sm text-gray-600">
          <span className="text-xl font-semibold text-gray-800">3</span> appointments this week
        </p>
      </div>

      {/* Chart */}
      <div className="relative mt-6 h-32">
        <div className="flex h-full">
          {activityData.map((item, index) => (
            <div
              key={index}
              className="flex-1 flex flex-col items-center justify-end gap-1"
            >
              {/* Grouped bars */}
              <div className="flex items-end gap-[2px] h-full">
                {item.values.map((v, i) => {
                  const height = (v / maxValue) * 100;
                  return (
                    <div
                      key={i}
                      className="w-1 rounded-full"
                      style={{
                        height: `${Math.max(height, 10)}%`,
                        backgroundColor: barColors[i % barColors.length],
                      }}
                    ></div>
                  );
                })}
              </div>

              {/* Day Label */}
              <div className="text-xs text-gray-500 mt-2">{item.day}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
