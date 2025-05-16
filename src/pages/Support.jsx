import React, { useState } from 'react'

const Support = () => {
  const [tickets, setTickets] = useState([
    { id: 'SUP-001', issue: 'Can’t start Go Live mode', date: '2025-05-16', status: 'Open' }
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim()) {
      setTickets([
        ...tickets,
        { id: `SUP-00${tickets.length + 1}`, issue: input, date: new Date().toISOString().split('T')[0], status: 'Open' }
      ]);
      setInput('');
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">🛠 Support Center</h2>

      <div className="bg-white shadow rounded p-4 mb-6">
        <h4 className="font-semibold mb-2">Submit a New Ticket</h4>
        <div className="flex space-x-3">
          <input
            className="border rounded p-2 w-full"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Describe your issue..."
          />
          <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">Submit</button>
        </div>
      </div>

      <div className="bg-white shadow rounded p-4">
        <h4 className="font-semibold mb-2">Your Submitted Tickets</h4>
        <ul>
          {tickets.map((t, i) => (
            <li key={i} className="py-2 border-b">
              <div className="font-medium">{t.issue}</div>
              <div className="text-sm text-gray-500">{t.date} — Status: {t.status}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Support;
