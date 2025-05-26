import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Tickets from "./pages/Tickets";
import Admin from "./pages/Admin";
import Training from "./pages/Training";
import Devices from "./pages/Devices";
import Support from "./pages/Support";

const App = () => {
  const [token] = useState("dummy-token"); // simulate token

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard token={token} />} />
        <Route path="/tickets" element={<Tickets token={token} />} />
        <Route path="/admin" element={<Admin token={token} />} />
        <Route path="/training" element={<Training token={token} />} />
        <Route path="/devices" element={<Devices token={token} />} />
        <Route path="/support" element={<Support token={token} />} />
      </Routes>
    </Router>
  );
};

export default App;

