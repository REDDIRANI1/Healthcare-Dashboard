import React from 'react';
import { navigationLinks } from '../../data/navigationLinks';

const Sidebar: React.FC = () => {
  const mainLinks = navigationLinks.slice(0, 5); // Dashboard to Statistics
  const toolLinks = navigationLinks.slice(5, 7); // Chat and Support
  const settingsLink = navigationLinks.find(link => link.id === 'settings');

  return (
    <aside className="w-64 border-r border-gray-200 bg-sidebar-bg p-4 hidden md:flex flex-col justify-between overflow-y-auto">
      {/* Top Links */}
      <div>
        <div className="mb-4">
          <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider px-4 mb-2">
            General 
          </h2>
          <nav>
            <ul className="space-y-1">
              {mainLinks.map((link) => (
                <li key={link.id}>
                  <a href="#" className={`sidebar-link ${link.isActive ? 'active' : ''}`}>
                    <link.icon className="h-5 w-5" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Tools Section Heading */}
        <div className="mt-6 mb-2 px-4">
          <h2 className="text-xs uppercase text-gray-500 font-semibold tracking-wider">
            Tools
          </h2>
        </div>

        {/* Tool Links */}
        <nav>
          <ul className="space-y-1">
            {toolLinks.map((link) => (
              <li key={link.id}>
                <a href="#" className="sidebar-link">
                  <link.icon className="h-5 w-5" />
                  <span>{link.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Settings at Bottom */}
      {settingsLink && (
        <div className="pt-4">
          <a href="#" className="sidebar-link">
            <settingsLink.icon className="h-5 w-5" />
            <span>{settingsLink.name}</span>
          </a>
        </div>
      )}
    </aside>
  );
};


export default Sidebar;
