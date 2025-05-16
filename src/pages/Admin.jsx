import React, { useState } from 'react'

export default function Admin() {
  const [confidenceThreshold, setConfidenceThreshold] = useState(95)
  const [admins, setAdmins] = useState([
    { id: 1, name: 'William Bridle', role: 'Admin' },
    { id: 2, name: 'Leah Sharp', role: 'Trainer' }
  ])
  const [newAdmin, setNewAdmin] = useState({ name: '', role: 'Viewer' })

  const handleAddAdmin = () => {
    if (newAdmin.name.trim()) {
      const newEntry = {
        id: admins.length + 1,
        name: newAdmin.name,
        role: newAdmin.role
      }
      setAdmins([...admins, newEntry])
      setNewAdmin({ name: '', role: 'Viewer' })
    }
  }

  const handleRemove = (id) => {
    setAdmins(admins.filter(admin => admin.id !== id))
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">⚙️ Admin Settings</h2>

      <div className="bg-white p-6 shadow rounded mb-8">
        <h4 className="font-semibold mb-2">🎯 Confidence Threshold</h4>
        <p className="text-sm text-gray-600 mb-2">
          Arty will only attempt tasks if he is at or above this confidence level.
        </p>
        <div className="flex items-center space-x-3">
          <input
            type="number"
            min="50"
            max="100"
            value={confidenceThreshold}
            onChange={e => setConfidenceThreshold(Number(e.target.value))}
            className="border p-2 w-20 text-center rounded"
          />
          <span className="text-gray-500">%</span>
        </div>
      </div>

      <div className="bg-white p-6 shadow rounded">
        <h4 className="font-semibold mb-4">👥 Admin Management</h4>
        <div className="flex space-x-3 mb-4">
          <input
            type="text"
            placeholder="Name"
            value={newAdmin.name}
            onChange={e => setNewAdmin({ ...newAdmin, name: e.target.value })}
            className="border p-2 rounded"
          />
          <select
            value={newAdmin.role}
            onChange={e => setNewAdmin({ ...newAdmin, role: e.target.value })}
            className="border p-2 rounded"
          >
            <option>Admin</option>
            <option>Trainer</option>
            <option>Viewer</option>
          </select>
          <button onClick={handleAddAdmin} className="bg-green-600 text-white px-4 py-2 rounded">
            Add Admin
          </button>
        </div>

        <table className="w-full text-sm table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Name</th>
              <th className="px-4 py-2 text-left">Role</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map(admin => (
              <tr key={admin.id} className="border-t">
                <td className="px-4 py-2">{admin.name}</td>
                <td className="px-4 py-2">{admin.role}</td>
                <td className="px-4 py-2">
                  <button onClick={() => handleRemove(admin.id)} className="text-red-600 hover:underline">
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
