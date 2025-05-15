import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Tickets from './pages/Tickets'
import Training from './pages/Training'
import Admin from './pages/Admin'
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
