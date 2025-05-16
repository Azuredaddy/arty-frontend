import React, { useState } from 'react'

const mockSupport = [
  { id: 'SUP-001', subject: 'Issue with Go Live', status: 'Open', date: '2025-05-15' },
  { id: 'SUP-002', subject: 'Training not saving', status: 'Closed', date: '2025-05-14' }
]

export default function Support() {
  const [tickets, setTickets] = useState(mockSupport)
  const [newTicket, setNewTicket] = useState('')

  const handleSubmit = () => {
    if (newTicket.trim()) {
      const newEntry = {
        id: `SUP-00${tickets.length + 1}`,
        subject: newTicket,
        status: 'Open',
        date: new Date().toISOString().split('T')[0]
      }
      setTickets([newEntry, ...tickets])
      setNewTicket('')
    }
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">📮 Support Tickets</h2>

      <div className="bg-white shadow p-6 rounded mb-8">
        <h4 className="font-semibold mb-2">Submit a New Issue</h4>
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="Describe your issue..."
            value={newTicket}
            onChange={e => setNewTicket(e.target.value)}
            className="border p-2 rounded w-full"
          />
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
            Submit
          </button>
        </div>
      </div>

      <div className="bg-white shadow p-6 rounded">
        <h4 className="font-semibold mb-3">Your Tickets</h4>
        <table className="w-full text-sm table-auto">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">ID</th>
              <th className="px-4 py-2 text-left">Subject</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {tickets.map(t => (
              <tr key={t.id} className="border-t">
                <td className="px-4 py-2">{t.id}</td>
                <td className="px-4 py-2">{t.subject}</td>
                <td className="px-4 py-2">{t.date}</td>
                <td className="px-4 py-2 text-green-600 font-semibold">{t.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
