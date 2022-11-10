import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [user1, setUser] = useState(null);

  const login = (user) => {
    setUser(user);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user1, login, logout}}>
      {children}
    </AuthContext.Provider>
  );

};


export const useAuth=()=>{
  return useContext(AuthContext)
}
