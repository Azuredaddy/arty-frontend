import { Navigate } from "react-router-dom";
import { useAuth } from "./contexts/AuthContext";

export default function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  console.log("🚧 [ProtectedRoute] Check");
  console.log("   🔄 loading:", loading);
  console.log("   👤 user:", user);

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Validating session...</div>;
  }

  if (!user) {
    console.warn("⛔ No user found, redirecting to /login");
    return <Navigate to="/login" replace />;
  }

  console.log("✅ Authenticated, rendering protected content");
  return children;
}
