import React, { useEffect, useState } from 'react';

const TenantGate = ({ children }) => {
  const [tenantId, setTenantId] = useState(localStorage.getItem('tenantId') || '');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (tenantId) {
      localStorage.setItem('tenantId', tenantId);
    }
  }, [tenantId]);

  const handleSubmit = async () => {
    try {
      const apiBase = import.meta.env.VITE_API_URL;
      console.log("Calling API:", `${apiBase}/api/resolve-tenant?email=${encodeURIComponent(email)}`);
      
      const res = await fetch(`${apiBase}/api/resolve-tenant?email=${encodeURIComponent(email)}`);
      if (!res.ok) throw new Error('Invalid email');
      
      const data = await res.json();
      if (data.tenant_id) {
        setTenantId(data.tenant_id);
      } else {
        setError('Tenant not found');
      }
    } catch (err) {
      console.error(err);
      setError('Unable to resolve tenant. Please try again.');
    }
  };

  if (!tenantId) {
    return (
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md max-w-sm w-full">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800">Enter Your Work Email</h1>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            className="w-full px-4 py-2 border rounded mb-2"
          />
          {error && <p className="text-sm text-red-600 mb-2">{error}</p>}
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700"
          >
            Continue
          </button>
        </div>
      </div>
    );
  }

  return children;
};

export default TenantGate;

};

export default TenantGate;
