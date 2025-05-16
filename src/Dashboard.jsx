import React from 'react'

const Dashboard = () => {
  return (
    <div className="p-6 space-y-8">
      <div className="bg-white shadow rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-2">Confidence Status</h2>
        <p>Arty can currently complete <strong>98%</strong> of tasks with <strong>95%</strong> confidence.</p>
        <div className="w-full bg-gray-200 rounded-full h-4 mt-2 mb-3">
          <div className="bg-yellow-400 h-4 rounded-full" style={{ width: '98%' }}></div>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Go Live</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Confidence Trend</h3>
          <img src="https://via.placeholder.com/300x150?text=Line+Chart" alt="Confidence Chart"/>
        </div>
        <div className="bg-white shadow rounded-lg p-6">
          <h3 className="text-lg font-semibold mb-2">Task Type Breakdown</h3>
          <img src="https://via.placeholder.com/300x150?text=Pie+Chart" alt="Task Chart"/>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;