'use client';
import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppWrapper = ({ children }) => {
  const [user, setUser] = useState('Phat Luu');

  return (
    <AppContext.Provider value={{ user, setUser }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
