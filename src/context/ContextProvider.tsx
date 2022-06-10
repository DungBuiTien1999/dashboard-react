import React, { createContext, useContext, useState } from "react";

export interface StateProps {
  chat?: boolean;
  cart?: boolean;
  userProfile?: boolean;
  notification?: boolean;
  activeMenu?: boolean;
  setActiveMenu(): void;
}
interface ContextProps {
  children?: React.ReactNode;
}

const StateContext = createContext<StateProps | null>(null);

// const initialState: StateProps = {
//   chat: false,
//   cart: false,
//   userProfile: false,
//   notification: false,
//   activeMenu: true,
// };

export const ContextProvider: React.FC<ContextProps> = ({ children }) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const updateActiveMenu = () => {
      setActiveMenu(!activeMenu);
  }
  return (
    <StateContext.Provider value={{activeMenu, setActiveMenu: updateActiveMenu}}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
