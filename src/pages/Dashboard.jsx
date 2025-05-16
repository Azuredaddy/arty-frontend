import React from 'react'

export default function Dashboard() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">📊 Arty Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white shadow p-4 rounded">
          <h4 className="font-semibold mb-1">Tasks Completed Today</h4>
          <p className="text-2xl font-bold text-green-600">43</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h4 className="font-semibold mb-1">Weekly Summary</h4>
          <p className="text-lg text-blue-600">312 tasks</p>
        </div>
        <div className="bg-white shadow p-4 rounded">
          <h4 className="font-semibold mb-1">Confidence Trend</h4>
          <p className="text-lg text-yellow-600">Avg: 94%</p>
        </div>
      </div>
      <div className="bg-white shadow p-6 rounded mb-6">
        <h4 className="font-semibold mb-3">Arty Confidence Bar</h4>
        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
          <div className="h-6 bg-green-500 text-white text-sm text-center leading-6" style={{ width: '92%' }}>
            92% Ready
          </div>
        </div>
        <p className="text-xs text-gray-600 mt-2">
          This indicates how much Arty can currently handle with 95% confidence based on training data.
        </p>
      </div>
      <div className="bg-white shadow p-6 rounded">
        <h4 className="font-semibold mb-3">Go Live Controls</h4>
        <div className="flex space-x-4">
          <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">Go Live</button>
          <button className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">Stop</button>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-2">💡 Got an Idea?</h3>
        <button className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          Request a Feature
        </button>
      </div>
    </div>
  )
}