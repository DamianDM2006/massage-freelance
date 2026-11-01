import { createContext, useContext, useState } from "react";
import { BASE_URL } from "../api/index.js";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const login = async (credentials) => {
    console.log(`credentials`,credentials);
    const response = await fetch(BASE_URL + "/clients/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials)
    });
    console.log(`response:`, response);
    const text = await response.text();
    console.log(`text:`, text);
  };

  const value = {
    // token,
    login
    // register,
    // logout
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error(`useAuth must be used within AuthProvider.`);
  return context
};