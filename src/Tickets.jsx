import React from 'react'

const Tickets = () => {
  const tickets = [
    { id: 'TK-2031', summary: 'Reset user password', confidence: 95, status: 'Completed' },
    { id: 'TK-2032', summary: 'Install Office 365', confidence: 85, status: 'In Progress' },
    { id: 'TK-2033', summary: 'Setup new email alias', confidence: 72, status: 'Pending Training' },
  ];

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">🎫 Tickets Overview</h2>
      <table className="min-w-full bg-white shadow rounded">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-4 py-2 text-left">Ticket ID</th>
            <th className="px-4 py-2 text-left">Summary</th>
            <th className="px-4 py-2 text-left">Confidence</th>
            <th className="px-4 py-2 text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          {tickets.map((ticket, idx) => (
            <tr key={idx} className="border-t hover:bg-gray-50">
              <td className="px-4 py-2">{ticket.id}</td>
              <td className="px-4 py-2">{ticket.summary}</td>
              <td className="px-4 py-2 text-blue-600 font-semibold">{ticket.confidence}%</td>
              <td className="px-4 py-2 text-gray-700">{ticket.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Tickets;
