import React, { useState } from 'react'

export default function Admin() {
  const [confidenceThreshold, setConfidenceThreshold] = useState(95)
  const [admins, setAdmins] = useState([
    { id: 1, name: 'William Bridle', role: 'Admin' },
    { id: 2, name: 'Leah Sharp', role: 'Trainer' }
  ])
  const [newAdmin, setNewAdmin] = useState({ name: '', role: 'Viewer' })

  const [rules, setRules] = useState([
    'Don’t call users after 5pm'
  ])
  const [newRule, setNewRule] = useState('')

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

  const handleAddRule = () => {
    if (newRule.trim()) {
      setRules([...rules, newRule])
      setNewRule('')
    }
  }

  const handleRemoveRule = (index) => {
    const updated = [...rules]
    updated.splice(index, 1)
    setRules(updated)
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

      <div className="bg-white p-6 shadow rounded mb-8">
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

      <div className="bg-white p-6 shadow rounded">
        <h4 className="font-semibold mb-3">📜 Arty Automation Rules</h4>
        <p className="text-sm text-gray-600 mb-4">
          These optional rules guide Arty’s behavior during automation. Arty will adapt to follow these instructions.
        </p>
        {rules.length === 0 ? (
          <p className="text-gray-500 italic mb-4">No rules defined yet.</p>
        ) : (
          <ul className="list-disc list-inside mb-4 space-y-2">
            {rules.map((rule, i) => (
              <li key={i} className="flex justify-between items-center bg-gray-50 px-3 py-1 rounded">
                <span>{rule}</span>
                <button onClick={() => handleRemoveRule(i)} className="text-sm text-red-500 hover:underline">Remove</button>
              </li>
            ))}
          </ul>
        )}
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Add a rule (e.g. Don’t call after 5pm)"
            value={newRule}
            onChange={e => setNewRule(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button onClick={handleAddRule} className="bg-blue-600 text-white px-4 py-2 rounded">
            Add Rule
          </button>
        </div>
      </div>
    </div>
  )
}
