import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {   
  // localStorage.clear()

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        setLocalStorage(); // Ensure data exists in localStorage
        // const data = getLocalStorage();
        // console.log(data.employees); // Debugging purpose
        // setUserData(data); // Store fetched data in state
        const {employees, admin} = getLocalStorage()
        setUserData({employees,admin})
      }, []);
  return (
    <div>
      <AuthContext.Provider value={userData}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProvider;
