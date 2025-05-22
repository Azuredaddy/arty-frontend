
// src/components/ProtectedRoute.jsx
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  useEffect(() => {
    console.log("🔐 ProtectedRoute mounted");
    console.log("🕒 loading:", loading);
    console.log("👤 user:", user);
  }, [loading, user]);

  if (loading) {
    return <div className="p-6 text-center text-gray-500">🔄 Loading auth...</div>;
  }

  if (!user) {
    console.warn("⛔ Not authenticated, redirecting...");
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

