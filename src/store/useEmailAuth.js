// src/store/useAuthStore.js
import { create } from "zustand";
import { auth } from "../firebase"
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, createUserWithEmailAndPassword } from "firebase/auth";

const useAuthStore = create((set) => ({
  user: null,
  loading: true,
  error: null,

  // Sign in with email and password
  signIn: async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      set({ user: userCredential.user, error: null });
    } catch (error) {
      set({ error: error.message });
    }
  },

  // Register with email and password
  register: async (email, password) => {
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      set({ user: userCredential.user, error: null });
    } catch (error) {
      set({ error: error.message });
    }
  },

  // Sign out
  signOut: async () => {
    try {
      await signOut(auth);
      set({ user: null });
    } catch (error) {
      set({ error: error.message });
    }
  },
  
  // Set up auth state listener
  setAuthListener: () => {
    onAuthStateChanged(auth, (user) => {
      set({ user, loading: false });
    });
  },
}));

export default useAuthStore;
