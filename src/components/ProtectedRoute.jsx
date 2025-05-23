import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";  // Use the AuthContext

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();  // Get user and loading from AuthContext

  useEffect(() => {
    console.log("🔐 ProtectedRoute mounted");
    console.log("🕒 loading:", loading);
    console.log("👤 user:", user);
  }, [loading, user]);

  // While loading, show a loading message
  if (loading) {
    return <div>Loading...</div>;  // Customize this as per your requirement
  }

  // If no user is authenticated, redirect to login
  if (!user) {
    console.warn("⛔ Not authenticated, redirecting...");
    return <Navigate to="/login" replace />;
  }

  // If user is authenticated, render the protected content (children)
  return <>{children}</>;
}
