import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'

const Layout = ({ children }) => (
  <div style={{ fontFamily: 'Arial, sans-serif', padding: 20 }}>
    <h1>🤖 Arty Management Portal</h1>
    <nav style={{ marginBottom: 20 }}>
      <Link to="/" style={{ marginRight: 10 }}>Dashboard</Link>
      <Link to="/tickets" style={{ marginRight: 10 }}>Tickets</Link>
      <Link to="/training" style={{ marginRight: 10 }}>Training</Link>
      <Link to="/admin">Admin</Link>
    </nav>
    {children}
  </div>
)

const Dashboard = () => (
  <div>
    <h2>Dashboard</h2>
    <p>Arty Status: ✅ Running</p>
    <p>Confidence Level: 93%</p>
  </div>
)

const Tickets = () => (
  <div>
    <h2>Tickets</h2>
    <ul>
      <li>✅ Reset password for user A</li>
      <li>❌ Install software for user B <button>TRAIN</button></li>
    </ul>
  </div>
)

const Training = () => (
  <div>
    <h2>Training History</h2>
    <ul>
      <li>2024-05-12: Ticket training - Success</li>
      <li>2024-05-13: Form automation - In Progress</li>
    </ul>
  </div>
)

const Admin = () => (
  <div>
    <h2>Admin Panel</h2>
    <p>Change voice profile, confidence thresholds, and deploy settings.</p>
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
