import React, { createContext, useState, useContext } from "react";

const MainContext = createContext();

export function useMainContext() {
  return useContext(MainContext);
}

export function ContextProvider({ children }) {
  const [openToggle, setOpenToggle] = useState(false)
  const [openFilter, setOpenFilter] = useState(false)

  const [checkPopular, setCheckPopular] = useState(false)
  const [checkMostVisited, setCheckMostVisited] = useState(false)
  const [checkForMen, setCheckForMen] = useState(false)
  const [checkForWomen, setCheckForWomen] = useState(false)
  const [cart, setCart] = useState([]);
  const value = {
    openToggle,
    setOpenToggle,
    openFilter,
    setOpenFilter,
    checkPopular,
    setCheckPopular,
    checkMostVisited,
    setCheckMostVisited,
    checkForMen,
    setCheckForMen,
    checkForWomen,
    setCheckForWomen,
    cart,
    setCart
  };
  return (
    <>
      <MainContext.Provider value={value}>{children}</MainContext.Provider>
    </>
  );
}
