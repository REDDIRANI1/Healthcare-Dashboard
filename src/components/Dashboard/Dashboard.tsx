import React from 'react';
import AnatomySection from './AnatomySection';
import HealthStatusCards from './HealthStatusCards';
import CalendarView from './CalendarView';
import UpcomingSchedule from './UpcomingSchedule';
import ActivityFeed from './ActivityFeed';

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-800">Dashboard</h1>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left column - Anatomy and Activity */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-xl shadow-sm p-5">
            <div className="flex justify-end items-center mb-4">
              <button className="text-sm hover:underline">
  This Week <span className="text-base">▾</span>
</button>

            </div>
            <div className="flex flex-col md:flex-row">
              <AnatomySection />
              <HealthStatusCards />
            </div>
          </div>

          {/* 👇 Activity Feed moved here */}
          <ActivityFeed />
        </div>

        {/* Right column - Calendar and schedule */}
        <div className="lg:col-span-7 space-y-6">
          <CalendarView />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
