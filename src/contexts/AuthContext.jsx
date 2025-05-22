import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        console.log("✅ Firebase user signed in:", firebaseUser.uid);

        // fetch tenantId from Firestore
        const userDocRef = doc(db, "users", firebaseUser.uid);
        const userDocSnap = await getDoc(userDocRef);

        if (userDocSnap.exists()) {
          const tenantId = userDocSnap.data().tenantId;
          console.log("📦 tenantId found:", tenantId);
          localStorage.setItem("tenantId", tenantId);
        } else {
          console.warn("⚠️ No Firestore document found for user");
        }

        setUser(firebaseUser);
      } else {
        setUser(null);
        localStorage.removeItem("tenantId");
      }

      setLoading(false); // only after tenantId check
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ user, loading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

