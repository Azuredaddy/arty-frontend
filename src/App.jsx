import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import TenantGate from './components/TenantGate';

const App = () => {
  return (
    <TenantGate>
      <Routes>
        <Route path="/*" element={<Layout />} />
      </Routes>
    </TenantGate>
  );
};

export default App;
