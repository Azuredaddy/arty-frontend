import React, { useState } from 'react';

const Training = () => {
  const [ticketsToTrain, setTicketsToTrain] = useState([
    { task: 'Reset VPN Profile', confidence: 78 },
    { task: 'Add new shared mailbox', confidence: 61 },
    { task: 'Update phone extension', confidence: 84 }
  ]);

  const [isTraining, setIsTraining] = useState(false);
  const [log, setLog] = useState([]);
  const [lastTrained, setLastTrained] = useState(null);

  const handleTrain = (index) => {
    const ticket = ticketsToTrain[index];
    setIsTraining(true);

    setTimeout(() => {
      const updated = [...ticketsToTrain];
      updated.splice(index, 1);
      setTicketsToTrain(updated);

      const time = new Date().toLocaleString();
      setLog((prev) => [...prev, { task: ticket.task, time, trainedBy: 'William' }]);
      setLastTrained(ticket);

      setIsTraining(false);
    }, 1500);
  };

  const handleUndo = () => {
    if (lastTrained) {
      setTicketsToTrain((prev) => [...prev, lastTrained]);
      setLog((prev) => prev.slice(0, -1));
      setLastTrained(null);
    }
  };

  const handleExport = () => {
    const data = [
      ['Task', 'Confidence'],
      ...ticketsToTrain.map(t => [t.task, `${t.confidence}%`])
    ];
    const csv = data.map(row => row.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'training-tickets.csv';
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <main className="flex-1 p-8 relative">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Tickets Arty Needs to Learn</h1>
        <button
          onClick={handleExport}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow text-sm"
        >
          📥 Export Report
        </button>
      </div>

      {/* Training modal */}
      {isTraining && (
        <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg animate-pulse text-center">
            <p className="text-lg font-semibold text-blue-600">🧠 Arty is training...</p>
            <p className="text-sm text-gray-500 mt-1">Please wait a moment</p>
          </div>
        </div>
      )}

      <div className="bg-white shadow rounded-lg p-6">
        {ticketsToTrain.length === 0 ? (
          <p className="text-gray-600">🎉 No training needed. Arty is up to date!</p>
        ) : (
          ticketsToTrain.map((ticket, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-4 border-b border-gray-200 hover:bg-gray-50"
            >
              <div>
                <p className="font-medium text-gray-800">{ticket.task}</p>
                <p
                  className={`text-sm ${
                    ticket.confidence >= 80
                      ? 'text-yellow-500'
                      : ticket.confidence >= 65
                      ? 'text-orange-500'
                      : 'text-red-500'
                  }`}
                >
                  Confidence: {ticket.confidence}%
                </p>
              </div>
              <button
                onClick={() => handleTrain(index)}
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm"
              >
                Train Arty
              </button>
            </div>
          ))
        )}
      </div>

      {/* Training Log + Undo */}
      {log.length > 0 && (
        <div className="mt-8 bg-white p-4 rounded shadow text-sm">
          <div className="flex justify-between items-center mb-2">
            <h2 className="font-semibold text-gray-700">📋 Training Log</h2>
            {lastTrained && (
              <button
                onClick={handleUndo}
                className="text-sm text-blue-600 hover:underline"
              >
                Undo Last
              </button>
            )}
          </div>
          <ul className="space-y-1 text-gray-600">
            {log.map((entry, i) => (
              <li key={i}>✅ <strong>{entry.task}</strong> trained by {entry.trainedBy} at {entry.time}</li>
            ))}
          </ul>
        </div>
      )}
    </main>
  );
};

export default Training;

