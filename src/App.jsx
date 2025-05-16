import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Tickets from './pages/Tickets'
import Training from './pages/Training'
import Devices from './pages/Devices'
import Admin from './pages/Admin'
import Support from './pages/Support'

const App = () => {
  return (
    <div className="p-6">
      <nav className="space-x-4 mb-6 border-b pb-4">
        <Link to="/">Dashboard</Link>
        <Link to="/tickets">Tickets</Link>
        <Link to="/training">Training</Link>
        <Link to="/devices">Devices</Link>
        <Link to="/admin">Admin</Link>
        <Link to="/support">Support</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/training" element={<Training />} />
        <Route path="/devices" element={<Devices />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </div>
  )
}

export default App;
