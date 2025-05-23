import React, { createContext, useContext, useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase"; // Firebase initialization

// Create AuthContext
const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);  // Initial user state
  const [loading, setLoading] = useState(true);  // Loading state

  useEffect(() => {
    // Observe auth state change
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);  // User is authenticated
      } else {
        setUser(null);   // No user authenticated
      }
      setLoading(false);  // Finished loading
    });

    // Cleanup the observer on component unmount
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

