import React from 'react'

export default function Devices() {
  const mockDevices = [
    { id: 'arty-001', name: 'Front Desk', status: 'Learning', lastSeen: '1 min ago' },
    { id: 'arty-002', name: 'Warehouse Kiosk', status: 'Idle', lastSeen: '5 mins ago' }
  ]

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">🖥️ Arty Devices</h2>

      <div className="bg-white shadow rounded p-6">
        <table className="w-full text-sm">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Device ID</th>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Last Seen</th>
            </tr>
          </thead>
          <tbody>
            {mockDevices.map(d => (
              <tr key={d.id} className="border-t">
                <td className="px-4 py-2">{d.id}</td>
                <td className="px-4 py-2">{d.name}</td>
                <td className="px-4 py-2">{d.status}</td>
                <td className="px-4 py-2">{d.lastSeen}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
