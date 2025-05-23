import { Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Layout from './Layout';
import { useAuth, AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from './pages/ProtectedRoute';

function AppRoutes() {
  const { loading } = useAuth(); // updated to match context state key

  if (loading) {
    console.log("⏳ Waiting for Firebase auth to initialize...");
    return <div className="p-8 text-center text-gray-500">🔄 Initializing authentication...</div>;
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
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </AuthProvider>
  );
}



