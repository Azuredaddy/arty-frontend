import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import './index.css'

const App = () => (
  <Router>
    <div className="flex h-screen">
      <aside className="w-64 bg-gray-800 text-white p-6">
        <h1 className="text-xl font-bold mb-6">🤖 Arty Portal</h1>
        <nav className="space-y-2">
          <NavLink to="/" className={({ isActive }) => isActive ? 'text-blue-300' : ''}>Dashboard</NavLink>
        </nav>
      </aside>
      <main className="flex-1 p-10 bg-gray-100">
        <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </main>
    </div>
  </Router>
)

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
