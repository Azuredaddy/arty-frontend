import React, { useState } from 'react'

const initialLowConfidence = [
  { id: 'TK-1042', summary: 'Install printer driver', confidence: 43 },
  { id: 'TK-1043', summary: 'Add mailbox alias', confidence: 50 }
]

export default function Training() {
  const [toTrain, setToTrain] = useState(initialLowConfidence)
  const [trained, setTrained] = useState([])

  const handleTrain = (ticket) => {
    // Simulate training logic and move to trained section
    setToTrain(toTrain.filter(t => t.id !== ticket.id))
    setTrained([...trained, { ...ticket, status: 'Trained', boosted: 100 }])
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">🧠 Training Sessions</h2>

      <div className="mb-8">
        <h3 className="text-xl font-semibold mb-4">🛠 Needs Training</h3>
        {toTrain.length === 0 ? (
          <p className="text-gray-600">All tasks have been trained. Great work!</p>
        ) : (
          <div className="overflow-auto bg-white rounded shadow">
            <table className="w-full table-auto text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Ticket ID</th>
                  <th className="px-4 py-2 text-left">Summary</th>
                  <th className="px-4 py-2 text-left">Confidence</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {toTrain.map(ticket => (
                  <tr key={ticket.id} className="border-t">
                    <td className="px-4 py-2">{ticket.id}</td>
                    <td className="px-4 py-2">{ticket.summary}</td>
                    <td className="px-4 py-2 text-yellow-600 font-semibold">{ticket.confidence}%</td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => handleTrain(ticket)}
                        className="bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700"
                      >
                        Train
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">✅ Trained</h3>
        {trained.length === 0 ? (
          <p className="text-gray-600">No trained tasks yet.</p>
        ) : (
          <div className="overflow-auto bg-white rounded shadow">
            <table className="w-full table-auto text-sm">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2 text-left">Ticket ID</th>
                  <th className="px-4 py-2 text-left">Summary</th>
                  <th className="px-4 py-2 text-left">Previous Confidence</th>
                  <th className="px-4 py-2 text-left">Status</th>
                </tr>
              </thead>
              <tbody>
                {trained.map(ticket => (
                  <tr key={ticket.id} className="border-t">
                    <td className="px-4 py-2">{ticket.id}</td>
                    <td className="px-4 py-2">{ticket.summary}</td>
                    <td className="px-4 py-2 text-gray-500">{ticket.confidence}% → {ticket.boosted}%</td>
                    <td className="px-4 py-2 text-green-600 font-semibold">{ticket.status}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}
