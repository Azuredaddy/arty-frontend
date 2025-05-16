import React, { useState } from 'react'

const Training = () => {
  const [toTrain, setToTrain] = useState([
    { id: 'TK-3041', summary: 'Install antivirus', confidence: 60 },
    { id: 'TK-3042', summary: 'Connect network printer', confidence: 45 }
  ]);
  const [trained, setTrained] = useState([]);

  const handleTrain = (ticket) => {
    setToTrain(toTrain.filter(t => t.id !== ticket.id));
    setTrained([...trained, { ...ticket, confidence: 100, status: 'Trained' }]);
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">🧠 Training</h2>

      <div className="mb-10">
        <h3 className="text-xl font-semibold mb-2">Needs Training</h3>
        <table className="w-full bg-white shadow rounded">
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
                  <button onClick={() => handleTrain(ticket)} className="bg-blue-600 text-white px-3 py-1 rounded">
                    Train
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-2">✅ Trained</h3>
        <table className="w-full bg-white shadow rounded">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-left">Ticket ID</th>
              <th className="px-4 py-2 text-left">Summary</th>
              <th className="px-4 py-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {trained.map(ticket => (
              <tr key={ticket.id} className="border-t">
                <td className="px-4 py-2">{ticket.id}</td>
                <td className="px-4 py-2">{ticket.summary}</td>
                <td className="px-4 py-2 text-green-600 font-semibold">{ticket.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Training;
