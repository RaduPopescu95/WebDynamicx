"use client"; // Asigură-te că această componentă este rulată doar pe client

// import { handleUploadFirestore } from "@/app/utils/firestoreUtils";

import React, { useState } from "react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // await addDoc(collection(db, "newsletter"), { email });
      // await handleUploadFirestore({ email }, "newsletter");
      setMessage("Te-ai înscris cu succes la newsletter!");
    } catch (error) {
      setMessage("A apărut o eroare. Încearcă din nou.");
    }

    setEmail("");
  };

  return (
    <div>
      <h2>Înscrie-te la newsletter</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Emailul tău"
          required
        />
        <button type="submit">Abonează-te</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default NewsletterForm;
