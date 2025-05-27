import React from 'react';
import { Search, Bell, Plus } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="h-16 bg-header-bg border-b border-gray-200 flex items-center justify-between px-6 py-2 sticky top-0 z-10">
      <div className="flex items-center">
        <h1 className="text-xl font-bold text-primary-700">
  <span className="text-teal-500">Health</span>care.
</h1>

      </div>

      <div className="flex-1 max-w-xl mx-8">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-4 w-4 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search..."
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-600 hover:text-primary-600 hover:bg-primary-50 rounded-full transition-colors">
          <Bell className="h-5 w-5" />
          <span className="absolute top-1 right-1.5 h-2 w-2 bg-error rounded-full"></span>
        </button>
        
        <button className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full transition-colors">
          <Plus className="h-5 w-5" />
        </button>
        
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 bg-primary-100 rounded-full overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="User profile" 
              className="h-full w-full object-cover"
            />
          </div>
          <div className="hidden md:block">
            <p className="text-sm font-medium text-gray-700">John Doe</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
