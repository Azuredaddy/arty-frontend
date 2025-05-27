import React, { useState } from 'react';

const Admin = () => {
  const [admins, setAdmins] = useState([
    { id: 1, name: 'William', role: 'Owner' },
    { id: 2, name: 'Sam', role: 'Manager' }
  ]);
  const [newAdmin, setNewAdmin] = useState('');
  const [confidenceThreshold, setConfidenceThreshold] = useState(95);
  const [rules, setRules] = useState([
    'Don’t call after 5pm',
    'Only observe on weekdays'
  ]);

  const handleAddAdmin = () => {
    if (newAdmin.trim()) {
      setAdmins([...admins, { id: Date.now(), name: newAdmin, role: 'Admin' }]);
      setNewAdmin('');
    }
  };

  const handleRemoveAdmin = (id) => {
    setAdmins(admins.filter(admin => admin.id !== id));
  };

  const handleAddRule = () => {
    setRules([...rules, '']);
  };

  const handleRuleChange = (index, value) => {
    const updated = [...rules];
    updated[index] = value;
    setRules(updated);
  };

  const handleRemoveRule = (index) => {
    const updated = [...rules];
    updated.splice(index, 1);
    setRules(updated);
  };

  return (
    <div className="space-y-12">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">🛠️ Arty Admin Panel</h1>

      {/* Admin Access Section */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">🔐 Admin Access</h2>
          <p className="text-sm text-gray-500">Manage who can control Arty’s rules, behavior, and thresholds.</p>
        </div>

        <ul className="space-y-2">
          {admins.map(admin => (
            <li key={admin.id} className="flex justify-between items-center border px-4 py-2 rounded bg-gray-50">
              <span>{admin.name} — <span className="text-sm text-gray-500">{admin.role}</span></span>
              <button onClick={() => handleRemoveAdmin(admin.id)} className="text-red-500 text-sm hover:underline">Remove</button>
            </li>
          ))}
        </ul>

        <div className="flex gap-2">
          <input
            type="text"
            value={newAdmin}
            onChange={e => setNewAdmin(e.target.value)}
            placeholder="Add new admin name..."
            className="border px-3 py-2 rounded w-full"
          />
          <button onClick={handleAddAdmin} className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">Add</button>
        </div>
      </section>

      {/* Confidence Threshold Section */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">📊 Confidence Threshold</h2>
          <p className="text-sm text-gray-500">
  This threshold determines how confident Arty must be in understanding a task before he is allowed to take automated action. Default: 95%
</p>

        </div>

        <label className="block text-sm text-gray-600 mt-4">Current Threshold: {confidenceThreshold}%</label>
        <input
          type="range"
          min="50"
          max="100"
          value={confidenceThreshold}
          onChange={e => setConfidenceThreshold(e.target.value)}
          className="w-full accent-blue-600"
        />
      </section>

      {/* Rules Section */}
      <section className="bg-white p-6 rounded-xl shadow space-y-4">
        <div>
          <h2 className="text-xl font-semibold text-gray-800 flex items-center gap-2">⚙️ Rules & Behavior</h2>
          <p className="text-sm text-gray-500">These are task automation guidelines Arty must follow.</p>
        </div>

        <ul className="space-y-3">
          {rules.map((rule, index) => (
            <li key={index} className="flex gap-2">
              <input
                type="text"
                value={rule}
                onChange={e => handleRuleChange(index, e.target.value)}
                className="flex-1 border px-3 py-2 rounded"
              />
              <button onClick={() => handleRemoveRule(index)} className="text-red-500 text-sm hover:underline">Remove</button>
            </li>
          ))}
        </ul>

        <button onClick={handleAddRule} className="mt-2 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
          ➕ Add Rule
        </button>
      </section>
    </div>
  );
};

export default Admin;
