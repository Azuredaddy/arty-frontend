import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";

const Dashboard = () => {
  const navigate = useNavigate();
  const [tenantId, setTenantId] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const savedTenant = localStorage.getItem("tenantId");
    const currentUser = auth.currentUser;

    console.log("📦 Dashboard Load");
    console.log("🧾 tenantId from localStorage:", savedTenant);
    console.log("👤 Firebase currentUser:", currentUser);

    if (!savedTenant) {
      console.warn("⚠️ No tenantId found. Redirecting to login...");
      navigate("/login");
      return;
    }

    if (!currentUser) {
      console.warn("⚠️ No currentUser found. Redirecting to login...");
      navigate("/login");
      return;
    }

    setTenantId(savedTenant);
    setUser(currentUser);
  }, [navigate]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold">🎉 Dashboard Loaded</h1>
      <p>👤 User: {user?.email || "Not available"}</p>
      <p>🏷️ Tenant ID: {tenantId || "Not available"}</p>
    </div>
  );
};

export default Dashboard;


