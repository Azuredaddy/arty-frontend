import React, { useState } from 'react';

const Devices = () => {
  const [observingDevices, setObservingDevices] = useState([
    { id: 1, name: 'William’s Laptop', status: 'Observing' },
    { id: 2, name: 'Support PC - 01', status: 'Observing' }
  ]);

  const [liveArtyDevices, setLiveArtyDevices] = useState([
    { id: 101, name: 'Arty-Office-01' },
    { id: 102, name: 'Arty-Remote-02' }
  ]);

  const toggleObserving = (id) => {
    setObservingDevices(prev =>
      prev.map(device =>
        device.id === id
          ? {
              ...device,
              status: device.status === 'Observing' ? 'Paused' : 'Observing'
            }
          : device
      )
    );
  };

  const handleAddObserver = () => {
    // Placeholder for downloading the .exe
    alert('Downloading Arty Observer Installer...');
  };

  const handleAddArty = () => {
    // Placeholder for future physical Arty onboarding
    alert('Preparing to register a new Arty physical device...');
  };

  return (
    <div className="space-y-12">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold text-gray-800">Devices</h1>
        <div className="flex gap-4">
          <button
            onClick={handleAddArty}
            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm shadow"
          >
            ➕ Add Arty Device
          </button>
          <button
            onClick={handleAddObserver}
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm shadow"
          >
            📥 Add Observer Device
          </button>
        </div>
      </div>

      {/* Section: Observing Devices */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">🧠 Devices Observing (Learning Mode)</h2>
        {observingDevices.length === 0 ? (
          <p className="text-sm text-gray-500">No devices are currently observing user actions.</p>
        ) : (
          <ul className="space-y-4">
            {observingDevices.map(device => (
              <li
                key={device.id}
                className="flex items-center justify-between p-4 border border-blue-100 rounded-lg bg-blue-50"
              >
                <div>
                  <p className="font-medium text-blue-800">{device.name}</p>
                  <p className="text-sm text-blue-600">Status: {device.status}</p>
                </div>
                <button
                  onClick={() => toggleObserving(device.id)}
                  className={`px-4 py-2 rounded text-white text-sm font-semibold shadow transition ${
                    device.status === 'Observing'
                      ? 'bg-red-500 hover:bg-red-600'
                      : 'bg-green-500 hover:bg-green-600'
                  }`}
                >
                  {device.status === 'Observing' ? 'Stop Observing' : 'Start Observing'}
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>

      {/* Section: Live Arty Devices */}
      <section className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-green-700 mb-4">🤖 Active Arty Devices</h2>
        {liveArtyDevices.length === 0 ? (
          <p className="text-sm text-gray-500">No active Arty instances are currently online.</p>
        ) : (
          <ul className="grid md:grid-cols-2 gap-4">
            {liveArtyDevices.map(device => (
              <li
                key={device.id}
                className="border border-green-200 p-4 rounded-lg bg-green-50 shadow-sm"
              >
                <p className="font-semibold text-green-800">{device.name}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
};

export default Devices;
