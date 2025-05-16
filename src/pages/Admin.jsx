import React from 'react'

const Admin = () => {
  return (
    <div className="p-6 space-y-10">
      <h2 className="text-2xl font-bold mb-4">Admin Settings</h2>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">🧑‍💼 Admin Roles</h3>
        <table className="w-full">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2">Name</th>
              <th className="px-4 py-2">Role</th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="px-4 py-2">William</td>
              <td className="px-4 py-2">Admin</td>
              <td className="px-4 py-2"><button className="text-blue-500">Remove</button></td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">🎯 Confidence Threshold</h3>
        <label className="block mb-2">Set Arty’s default confidence threshold:</label>
        <input type="number" className="border p-2 rounded w-32" defaultValue="95" />%
      </div>

      <div className="bg-white p-4 rounded shadow">
        <h3 className="text-lg font-semibold mb-2">📜 Rules</h3>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <input type="text" className="border p-2 rounded flex-1" placeholder="e.g. Don’t call after 6pm" />
            <button className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
          </li>
          <li><button className="mt-3 bg-green-500 text-white px-4 py-1 rounded">+ Add Rule</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Admin;