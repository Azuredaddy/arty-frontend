
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const navStyle = 'px-4 py-2 rounded hover:bg-blue-100';
  const active = 'font-bold text-blue-600';
  return (
    <nav className="bg-white shadow p-4 flex space-x-6 text-sm sticky top-0 z-10">
      <NavLink to="/" className={({ isActive }) => isActive ? active : navStyle}>Dashboard</NavLink>
      <NavLink to="/tickets" className={({ isActive }) => isActive ? active : navStyle}>Tickets</NavLink>
      <NavLink to="/training" className={({ isActive }) => isActive ? active : navStyle}>Training</NavLink>
      <NavLink to="/devices" className={({ isActive }) => isActive ? active : navStyle}>Devices</NavLink>
      <NavLink to="/admin" className={({ isActive }) => isActive ? active : navStyle}>Admin</NavLink>
    </nav>
  );
};

export default Navbar;
