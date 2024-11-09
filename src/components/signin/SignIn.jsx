// src/components/SignIn.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAuthStore from "../../store/useEmailAuth";


function SignIn() {
  const { signIn, error } = useAuthStore();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    await signIn(email, password);
    navigate("/");
  };

  return (
    <form onSubmit={handleSignIn} className="space-y-4">
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
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
        Sign In
      </button>
    </form>
  );
}

export default SignIn;
