import React from 'react'
import { createContext, useContext, useState,ReactNode  } from "react";
interface AppState {
    // Ваша структура даних стану
  }
  export const AppStateContext = createContext<[AppState, React.Dispatch<React.SetStateAction<AppState>>] | undefined>(
    undefined
  );
interface AppProviderProps {
    children: ReactNode;
  }
  
  export function AppProvider({ children }: AppProviderProps) {
    const value = useState<AppState>({});
    return (
      <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
    )
  }
  export function useAppState() {
    const context = useContext(AppStateContext);
    if (!context) {
      throw new Error("useAppState must be used within the AppProvider");
    }
    return context;
  }
  