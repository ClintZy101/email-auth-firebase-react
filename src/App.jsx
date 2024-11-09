// src/App.js
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/signin/SignIn";
import SignUp from "./components/signup/SignUp";
import ProtectedRoute from "./components/protectedRoute/ProtectedRoute"
import Home from "./pages/HomePage";
import useAuthStore from "./store/useEmailAuth";
import Navbar from "./components/navbar/Navbar";
import axios from 'axios';


function App() {
  const { setAuthListener } = useAuthStore();

  useEffect(() => {
    setAuthListener();
  }, [setAuthListener]);



const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/authentication',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNTg5NDVmZjg3MWMzYTgyZjk2MDkzNTU0ODhjYTVhZiIsIm5iZiI6MTczMDk4NzY1Ny4wMTQ4MDYsInN1YiI6IjYwYzIwMTQ5MWM2YWE3MDA0MTdkMDU0MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.zn_5CBOqFlJKBzN3Pt2DEvab9gxn60-dHGS2hb685xY'
  }
};

axios
  .request(options)
  .then(res => console.log(res.data))
  .catch(err => console.error(err));

  return (
    <Router>
      <Navbar />
      <div className="p-8">
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home/>
              </ProtectedRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
