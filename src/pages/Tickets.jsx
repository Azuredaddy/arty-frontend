import React from 'react'

const mockTickets = [
  {
    id: 'TK-1001',
    user: 'Alice Smith',
    type: 'Reset Password',
    confidence: 94,
    status: 'Pending'
  },
  {
    id: 'TK-1002',
    user: 'Bob Lee',
    type: 'Create Ticket',
    confidence: 87,
    status: 'In Progress'
  },
  {
    id: 'TK-1003',
    user: 'Jenna Park',
    type: 'Install Software',
    confidence: 91,
    status: 'Resolved'
  }
]

const statusColor = {
  'Pending': 'bg-yellow-200 text-yellow-800',
  'In Progress': 'bg-blue-200 text-blue-800',
  'Resolved': 'bg-green-200 text-green-800'
}

export default function Tickets() {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">🎫 Arty Ticket Center</h2>

      <div className="bg-white shadow overflow-hidden border rounded-lg">
        <table className="min-w-full table-auto text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-3 text-left">Ticket ID</th>
              <th className="px-4 py-3 text-left">User</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">AI Confidence</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {mockTickets.map(ticket => (
              <tr key={ticket.id} className="border-t">
                <td className="px-4 py-3 font-medium">{ticket.id}</td>
                <td className="px-4 py-3">{ticket.user}</td>
                <td className="px-4 py-3">{ticket.type}</td>
                <td className="px-4 py-3">
                  <div className="relative w-full h-4 bg-gray-200 rounded-full overflow-hidden">
                    <div
                      className="bg-green-500 h-4 text-xs text-white text-center"
                      style={{ width: `${ticket.confidence}%` }}
                    >
                      {ticket.confidence}%
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${statusColor[ticket.status]}`}>
                    {ticket.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button className="text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700">
                    Let Arty Try
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
