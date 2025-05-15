import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import './index.css'

const Sidebar = () => (
  <div className="w-64 bg-gray-800 text-white h-screen p-6 fixed">
    <h2 className="text-xl font-bold mb-8">🤖 Arty Portal</h2>
    <nav className="space-y-4">
      <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-300' : ''}>Dashboard</NavLink><br/>
      <NavLink to="/tickets" className={({ isActive }) => isActive ? 'text-blue-300' : ''}>Tickets</NavLink><br/>
      <NavLink to="/training" className={({ isActive }) => isActive ? 'text-blue-300' : ''}>Training</NavLink><br/>
      <NavLink to="/admin" className={({ isActive }) => isActive ? 'text-blue-300' : ''}>Admin</NavLink>
    </nav>
  </div>
)

const Layout = ({ children }) => (
  <div className="flex">
    <Sidebar />
    <div className="ml-64 w-full p-10">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Welcome, Admin</h1>
      </header>
      {children}
    </div>
  </div>
)

const Dashboard = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="bg-white shadow p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Confidence Level</h3>
      <p className="text-2xl font-bold text-green-600">95%</p>
    </div>
    <div className="bg-white shadow p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Tickets Today</h3>
      <p className="text-2xl font-bold text-blue-600">24</p>
    </div>
    <div className="bg-white shadow p-6 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Arty Status</h3>
      <p className="text-2xl font-bold text-green-500">✅ Active</p>
    </div>
  </div>
)

const Tickets = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Ticket Queue</h2>
    <ul className="space-y-2">
      <li className="bg-white p-4 rounded shadow">Reset MFA - ✅ Completed</li>
      <li className="bg-white p-4 rounded shadow">Install App - ❌ Pending <button className="ml-4 bg-blue-500 text-white px-2 py-1 rounded">TRAIN</button></li>
    </ul>
  </div>
)

const Training = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Training History</h2>
    <ul className="space-y-2">
      <li className="bg-white p-4 rounded shadow">May 14 - User Creation - ✅ Success</li>
      <li className="bg-white p-4 rounded shadow">May 13 - Software Install - ⏳ In Progress</li>
    </ul>
  </div>
)

const Admin = () => (
  <div>
    <h2 className="text-xl font-bold mb-4">Admin Settings</h2>
    <p>Change confidence threshold, voice profile, and deploy settings here.</p>
  </div>
)

const App = () => (
  <Router>
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/training" element={<Training />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Layout>
  </Router>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
