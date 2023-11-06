import { CoachMarkProvider } from './coachMark.context';
import { DataContextProvider } from './data.context';
import React from 'react';

export interface BaseProviderProps {
  children: React.ReactNode;
}

interface AppProviderProps {
  children: React.ReactNode;
}

export interface AppContextProps {}

export const AppContext = React.createContext<AppContextProps>(null);

export const AppProvider = ({ children }: AppProviderProps) => (
  <AppContext.Provider value={{}}>
    <DataContextProvider>
      <CoachMarkProvider />
      {children}
    </DataContextProvider>
  </AppContext.Provider>
);
