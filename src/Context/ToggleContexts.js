import React, { useState, createContext } from "react";

export const ToggleContext = createContext();

export const ToggleProvider = ({ children }) => {
  const [toggleBtn, setToggleBtn] = useState(false);
  return (
    <ToggleContext.Provider value={[toggleBtn, setToggleBtn]}>
      {children}
    </ToggleContext.Provider>
  );
};
