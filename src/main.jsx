import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Training from './pages/Training'
import Devices from './pages/Devices'
import Tickets from './pages/Tickets'
import Admin from './pages/Admin'
import Support from './pages/Support'
import './index.css'

const App = () => (
  <Router>
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h1 className="text-xl font-bold mb-6">🤖 Arty Portal</h1>
        <nav className="space-y-2">
          <NavLink to="/">Dashboard</NavLink><br/>
          <NavLink to="/training">Training</NavLink><br/>
          <NavLink to="/devices">Devices</NavLink><br/>
          <NavLink to="/tickets">Tickets</NavLink><br/>
          <NavLink to="/admin">Admin</NavLink><br/>
          <NavLink to="/support">Support</NavLink>
        </nav>
      </aside>
      <main className="flex-1 p-8 bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/training" element={<Training />} />
          <Route path="/devices" element={<Devices />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </main>
    </div>
  </Router>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
