
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Training from './pages/Training';
import Devices from './pages/Devices';
import Admin from './pages/Admin';
import Support from './pages/Support';
import logo from './assets/arty-logo.png';
import { auth } from "./firebase";


const Layout = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('Overview');
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('arty_token');
    if (!storedToken) {
      navigate('/login');
    } else {
      setToken(storedToken);
    }
  }, [navigate]);

  const tabs = [
    { name: 'Dashboard', key: 'Overview' },
    { name: 'Training', key: 'Training' },
    { name: 'Devices', key: 'Devices' },
    { name: 'Admin', key: 'Admin' },
    { name: 'Support', key: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex">
      <aside className="w-64 bg-white shadow-lg p-6">
        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="Arty Logo" className="h-28 w-auto" />
        </div>
        <nav className="space-y-2">
          {tabs.map((tab) => (
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

      <main className="flex-1 p-6">
        {activeTab === 'Overview' && <Dashboard token={token} />}
        {activeTab === 'Training' && <Training token={token} />}
        {activeTab === 'Devices' && <Devices token={token} />}
        {activeTab === 'Admin' && <Admin token={token} />}
        {activeTab === 'Support' && <Support token={token} />}
      </main>
    </div>
  );
};

export default Layout;
