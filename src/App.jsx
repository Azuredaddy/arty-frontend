import React, { useState } from 'react';
import Dashboard from './pages/Dashboard';
import Training from './pages/Training';

const Main = () => {
  const [activeTab, setActiveTab] = useState('Dashboard');

  const tabs = [
    { name: 'Dashboard', key: 'Dashboard' },
    { name: 'Training', key: 'Training' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-6">
        <div className="flex items-center justify-center mb-6">
          <img src="./assets/arty-logo.png" alt="Arty Logo" className="h-28 w-auto" />
        </div>
        <nav className="space-y-2">
          {tabs.map(tab => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`block w-full text-left px-4 py-2 rounded-lg transition font-medium ${
                activeTab === tab.key
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-700 hover:bg-blue-100'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </nav>
      </aside>

      {/* Page Content */}
      <main className="flex-1 p-8">
        {activeTab === 'Dashboard' && <Dashboard />}
        {activeTab === 'Training' && <Training />}
      </main>
    </div>
  );
};

export default Main;
