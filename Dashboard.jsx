import React from 'react'
import './index.css'

export default function Dashboard() {
  const confidence = 76 // Replace with real-time value if connected to backend

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">📊 Arty Performance Overview</h2>

      <div className="bg-white shadow p-6 rounded-lg mb-6">
        <h3 className="text-lg font-semibold mb-2">Confidence Status</h3>
        <p className="mb-2">
          Arty can currently complete <strong>{confidence}%</strong> of tasks with 95% confidence.
        </p>
        <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
          <div
            className={`h-6 text-xs text-white text-center leading-6 ${
              confidence >= 90 ? 'bg-green-500' : confidence >= 75 ? 'bg-yellow-400' : 'bg-red-500'
            }`}
            style={{ width: `${confidence}%` }}
          >
            {confidence}%
          </div>
        </div>
        <p className="mt-2 text-sm text-gray-500">
          {confidence >= 90
            ? '✅ Arty is ready for Go Live.'
            : '⏳ Arty is still learning. Keep training to improve confidence.'}
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white shadow p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">Confidence Trend</h4>
          <p className="text-sm text-gray-600 mb-2">Based on last 7 training sessions</p>
          <img
            src="https://quickchart.io/chart?c={type:'line',data:{labels:['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],datasets:[{label:'Confidence',data:[42,51,60,66,71,73,76]}]}}"
            alt="Confidence Graph"
            className="w-full rounded"
          />
        </div>

        <div className="bg-white shadow p-6 rounded-lg">
          <h4 className="text-lg font-semibold mb-2">Task Type Breakdown</h4>
          <img
            src="https://quickchart.io/chart?c={type:'pie',data:{labels:['Reset Password','Create Ticket','Install Software'],datasets:[{data:[40,30,30]}]}}"
            alt="Task Chart"
            className="w-full rounded"
          />
        </div>

        <div className="bg-white shadow p-6 rounded-lg col-span-2">
          <h4 className="text-lg font-semibold mb-2">Recent Training Sessions</h4>
          <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
            <li>📅 May 13 - Ticket Reset - ✅ Success (95%)</li>
            <li>📅 May 12 - Form Automation - ⚠️ Partial (72%)</li>
            <li>📅 May 11 - User Creation - ❌ Failed (40%)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
