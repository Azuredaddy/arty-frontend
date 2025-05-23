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

  // While the loading state is true, show a loading message
  if (loading) {
    return <div className="p-6 text-center text-gray-500">🔄 Loading auth...</div>;
  }

  // If there is no user (i.e., not authenticated), redirect to login
  if (!user) {
    console.warn("⛔ Not authenticated, redirecting...");
    return <Navigate to="/login" replace />;
  }

  // Return the children (protected route content) if user is authenticated
  return <>{children}</>;
}