import React, { useState } from 'react';

const Support = () => {
  const [tickets, setTickets] = useState([
    { subject: 'Arty not responding', requester: 'Jessie', date: '2025-05-18', status: 'Open' },
    { subject: 'Add new device for Arty', requester: 'Michael', date: '2025-05-17', status: 'Open' },
    { subject: 'Error while training', requester: 'Sam', date: '2025-05-16', status: 'Resolved' }
  ]);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ subject: '', name: '', description: '', file: null });
  const [search, setSearch] = useState('');
  const [alert, setAlert] = useState('');

  const handleChange = e => {
    const { name, value, files } = e.target;
    if (name === 'file') {
      setForm(prev => ({ ...prev, file: files[0] }));
    } else {
      setForm(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = () => {
    const newTicket = {
      subject: form.subject,
      requester: form.name,
      date: new Date().toISOString().split('T')[0],
      status: 'Open'
    };
    setTickets([newTicket, ...tickets]);
    setAlert('✅ Ticket submitted and notification sent!');
    setForm({ subject: '', name: '', description: '', file: null });
    setShowForm(false);
    setTimeout(() => setAlert(''), 3000);
  };

  const markResolved = index => {
    const updated = [...tickets];
    updated[index].status = 'Resolved';
    setTickets(updated);
  };

  const filteredTickets = tickets.filter(t =>
    t.subject.toLowerCase().includes(search.toLowerCase()) ||
    t.requester.toLowerCase().includes(search.toLowerCase()) ||
    t.status.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Support Tickets</h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          {showForm ? 'Cancel' : '+ Create Ticket'}
        </button>
      </div>

      {alert && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded">{alert}</div>}

      {showForm && (
        <div className="bg-white p-6 rounded shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">New Support Ticket</h2>
          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="border rounded p-2 mb-3 w-full"
          />
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Requester Name"
            className="border rounded p-2 mb-3 w-full"
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description (optional)"
            className="border rounded p-2 mb-3 w-full h-24"
          />
          <input type="file" name="file" onChange={handleChange} className="mb-2" />
          {form.file && (
            <div className="mb-3">
              <img
                src={URL.createObjectURL(form.file)}
                alt="attachment"
                className="h-20 mt-2 rounded border"
              />
            </div>
          )}
          <button onClick={handleSubmit} className="bg-green-600 text-white px-4 py-2 rounded">
            Submit Ticket
          </button>
        </div>
      )}

      <input
        type="text"
        placeholder="Search tickets..."
        className="mb-4 px-3 py-2 border rounded w-full"
        value={search}
        onChange={e => setSearch(e.target.value)}
      />

      <table className="w-full table-auto bg-white rounded shadow">
        <thead className="bg-gray-100 text-left">
          <tr>
            <th className="px-4 py-2">Subject</th>
            <th className="px-4 py-2">Requester</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Status</th>
            <th className="px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredTickets.map((t, idx) => (
            <tr key={idx} className="border-t">
              <td className="px-4 py-2">{t.subject}</td>
              <td className="px-4 py-2">{t.requester}</td>
              <td className="px-4 py-2">{t.date}</td>
              <td className={`px-4 py-2 font-medium ${t.status === 'Resolved' ? 'text-green-600' : 'text-orange-500'}`}>
                {t.status}
              </td>
              <td className="px-4 py-2">
                {t.status !== 'Resolved' && (
                  <button
                    onClick={() => markResolved(idx)}
                    className="text-blue-600 hover:underline"
                  >
                    Mark as Resolved
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Support;
