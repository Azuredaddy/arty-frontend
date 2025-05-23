import React, { useState, useEffect } from 'react';
import { auth } from "../firebase";

import {
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend
} from 'recharts';

const Dashboard = ({ token }) => {
  const [isLive, setIsLive] = useState(false);
  const [stats, setStats] = useState(null);
  const confidenceLevel = 87;

  useEffect(() => {
    if (token) {
      fetch('http://localhost:8000/api/dashboard/stats', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(data => setStats(data));
    }
  }, [token]);

  const handleExport = () => {
    const data = [
      ['Metric', 'Value'],
      ['Tickets Completed', stats?.tickets ?? '...'],
      ['Weekly Accuracy', '91%'],
      ['Most Performed Task', 'Password Reset'],
      ['Avg Time per Task', '12s'],
      ['Flagged for Training', stats?.training_tasks ?? '...']
    ];
    const csv = data.map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'arty-performance-report.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  const weeklyData = [
    { name: 'Mon', tickets: 20 },
    { name: 'Tue', tickets: 25 },
    { name: 'Wed', tickets: 18 },
    { name: 'Thu', tickets: 30 },
    { name: 'Fri', tickets: 22 },
    { name: 'Sat', tickets: 10 },
    { name: 'Sun', tickets: 5 }
  ];

  const taskDistribution = [
    { name: 'Password Reset', value: 40 },
    { name: 'User Unlock', value: 25 },
    { name: 'VPN Issues', value: 20 },
    { name: 'Other', value: 15 }
  ];

  const insightsData = [
    { name: 'Tickets Completed', value: stats?.tickets ?? 0 },
    { name: 'Weekly Accuracy (%)', value: 91 },
    { name: 'Flagged for Training', value: stats?.training_tasks ?? 0 }
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444'];

  return (
    <main className="flex-1 p-8">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold text-gray-800">Welcome back! Here’s how Arty is performing today</h1>
        <div className="flex items-center gap-3">
          <span className={`text-sm font-semibold ${isLive ? 'text-green-600' : 'text-red-600'}`}>
            {isLive ? '🟢 Live' : '🔴 Offline'}
          </span>
          <button
            onClick={() => setIsLive(!isLive)}
            className={`px-4 py-2 rounded-md text-white text-sm font-medium transition ${
              isLive ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
            }`}
          >
            {isLive ? 'Stop Live' : 'Go Live'}
          </button>
        </div>
      </div>

      {/* Confidence Bar */}
      <div className="mb-8">
        <div className="flex justify-between mb-1 items-center">
          <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">Arty's Job Confidence</p>
            <span
              className="text-blue-500 cursor-help text-sm font-bold"
              title="This bar shows how much of the workload Arty can confidently handle based on his training and your set confidence threshold."
            >
              ?
            </span>
          </div>
          <p className="text-sm text-gray-700 font-semibold">{confidenceLevel}%</p>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-5 overflow-hidden">
          <div
            className="h-5 bg-gradient-to-r from-green-400 to-green-600 text-right pr-2 text-white text-xs font-medium flex items-center justify-end"
            style={{ width: `${confidenceLevel}%` }}
          >
            {confidenceLevel}%
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Performance Overview</h2>
          <button
            onClick={handleExport}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            Export Report
          </button>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <BarChart data={insightsData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#3b82f6" radius={[5, 5, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Weekly Tickets</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={weeklyData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="tickets" fill="#3b82f6" radius={[5, 5, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Task Distribution</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={taskDistribution}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                label
              >
                {taskDistribution.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* 🔧 Debug Panel */}
      <div className="bg-gray-100 border border-gray-300 rounded-lg p-4 mt-10">
        <h2 className="text-lg font-semibold mb-2">🧪 Debug Panel</h2>
        <p className="text-sm text-gray-600 mb-1">👤 Firebase User:</p>
        <pre className="text-xs bg-white p-2 rounded overflow-x-auto">
          {JSON.stringify(auth?.currentUser, null, 2)}
        </pre>
        <p className="text-sm text-gray-600 mt-4 mb-1">🏷️ Tenant ID (from localStorage):</p>
        <pre className="text-xs bg-white p-2 rounded overflow-x-auto">
          {JSON.stringify(localStorage.getItem("tenantId"), null, 2)}
        </pre>
      </div>
    </main>
  );
};

export default Dashboard;

};

export default Dashboard;
