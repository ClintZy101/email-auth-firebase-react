// src/components/SignUp.js
import React, { useState } from "react";
import useAuthStore from "../../store/useEmailAuth";


function SignUp() {
  const { register, error } = useAuthStore();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    register(email, password);
  };

  return (
    <form onSubmit={handleRegister} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full px-3 py-2 border rounded"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full px-3 py-2 border rounded"
      />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
        Register
      </button>
    </form>
  );
}

export default SignUp;
