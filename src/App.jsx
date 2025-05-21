import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Layout from './Layout';
import { AuthProvider, useAuth } from './contexts/AuthContext';

function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();

  console.log("🔐 ProtectedRoute check:", { loading, user });

  if (loading) {
    return <div className="p-8 text-center">Loading session...</div>;
  }

  return user ? children : <Navigate to="/login" replace />;
}

// ⛔ Wait for auth to be ready before rendering routes
function AppRoutes() {
  const { loading } = useAuth();

  if (loading) {
    return <div className="p-8 text-center">Loading app...</div>;
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Layout>
              <Dashboard />
            </Layout>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppRoutes />
    </AuthProvider>
  );
}

