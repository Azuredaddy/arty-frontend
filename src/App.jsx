import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import TenantGate from './components/TenantGate';

const App = () => {
  return (
    <Router>
      <TenantGate>
        <Routes>
          <Route path="/*" element={<Layout />} />
        </Routes>
      </TenantGate>
    </Router>
  );
};

export default App;
