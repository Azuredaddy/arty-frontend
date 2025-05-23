// AddData.js

import { collection, addDoc } from "firebase/firestore";
import { db } from './firebase.js';  // Correct path for firebase.js inside the same src folder

// Function to add tenant data
async function addTenantData() {
  try {
    // Get a reference to the "tenants" collection
    const tenantsRef = collection(db, "tenants");

    // Add a new document to the collection
    const docRef = await addDoc(tenantsRef, {
      tenantId: "TestTenant",          // Unique tenant identifier
      tenantName: "Test Tenant Name",  // Tenant's name
      createdAt: new Date().toISOString()  // Timestamp of creation
    });

    // Log the document ID if successful
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    // Log the error if something goes wrong
    console.error("Error adding document: ", e);
  }
}

// Call the function to add the data
addTenantData();
