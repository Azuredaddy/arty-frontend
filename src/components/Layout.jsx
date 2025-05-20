
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => {
  const linkStyle = 'block px-4 py-2 rounded hover:bg-blue-100';
  const active = 'font-semibold text-blue-600 bg-blue-50';

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-white border-r shadow-lg p-6 space-y-4">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Arty Portal</h2>
        <nav className="space-y-2 text-sm">
          <NavLink to="/" end className={({ isActive }) => isActive ? active : linkStyle}>Dashboard</NavLink>
          <NavLink to="/tickets" className={({ isActive }) => isActive ? active : linkStyle}>Tickets</NavLink>
          <NavLink to="/training" className={({ isActive }) => isActive ? active : linkStyle}>Training</NavLink>
          <NavLink to="/devices" className={({ isActive }) => isActive ? active : linkStyle}>Devices</NavLink>
          <NavLink to="/admin" className={({ isActive }) => isActive ? active : linkStyle}>Admin</NavLink>
        </nav>
      </aside>
      <main className="flex-1 bg-gray-50 p-8">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
