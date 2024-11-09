// src/components/Home.js
import React from "react";
import useAuthStore from "../store/useEmailAuth";


function Home() {
  const { user, signOut } = useAuthStore();

  return (
    <div>
      <p>Welcome, {user?.email}</p>
      <button onClick={signOut} className="mt-4 bg-red-500 text-white py-2 px-4 rounded">
        Sign Out
      </button>
    </div>
  );
}

export default Home;
