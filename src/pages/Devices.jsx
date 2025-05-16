import React from 'react'

const Devices = () => {
  const devices = [
    { id: 'arty-001', name: 'Reception PC', status: 'Learning', lastSeen: '2 min ago' },
    { id: 'arty-002', name: 'IT Workstation', status: 'Idle', lastSeen: '15 min ago' }
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">🖥 Arty Devices</h2>

      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Device ID</th>
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Status</th>
            <th className="px-4 py-2 text-left">Last Seen</th>
          </tr>
        </thead>
        <tbody>
          {devices.map(device => (
            <tr key={device.id} className="border-t">
              <td className="px-4 py-2">{device.id}</td>
              <td className="px-4 py-2">{device.name}</td>
              <td className="px-4 py-2">{device.status}</td>
              <td className="px-4 py-2 text-sm text-gray-500">{device.lastSeen}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Devices;
