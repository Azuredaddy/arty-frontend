import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log("🔐 Starting login...");

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email.trim(), password);
      const user = userCredential.user;
      console.log("✅ Login successful. UID:", user.uid);

      // Fetch tenantId from Firestore
      console.log("📡 Fetching Firestore document for tenantId...");
      const userDocRef = doc(db, "users", user.uid);
      const userDocSnap = await getDoc(userDocRef);

      if (userDocSnap.exists()) {
        const tenantId = userDocSnap.data().tenantId;
        console.log("🏷️ tenantId found:", tenantId);
        localStorage.setItem("tenantId", tenantId);

        // Wait for auth sync before redirecting
        const unsubscribe = onAuthStateChanged(auth, (confirmedUser) => {
          if (confirmedUser) {
            console.log("✅ Auth confirmed, navigating to /dashboard");
            unsubscribe();
            setLoading(false);
            navigate("/dashboard");
          }
        });
      } else {
        console.warn("⚠️ No Firestore doc found for UID:", user.uid);
        setLoading(false);
        setError("No tenant ID found. Please contact support.");
      }
    } catch (err) {
      console.error("❌ Login error:", err);
      setLoading(false);
      setError("Invalid email or password.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full p-3 border border-gray-300 rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
            disabled={loading}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
