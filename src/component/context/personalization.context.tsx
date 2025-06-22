import React, { createContext, useContext, useState } from 'react';

type PersonalizationState = {
  title: string;
  subtitle: string;
  primaryColor: string;
  secondaryColor: string;
  backgroundImage: string;
};

type PersonalizationContextType = {
  state: PersonalizationState;
  setState: React.Dispatch<React.SetStateAction<PersonalizationState>>;
  isPanelOpen: boolean;
  setIsPanelOpen: (isOpen: boolean) => void;
};

const PersonalizationContext = createContext<PersonalizationContextType | undefined>(undefined);

export const PersonalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<PersonalizationState>({
    title: 'Bienvenido a Nuestra Plataforma',
    subtitle: 'Soluciones innovadoras para tus necesidades',
    primaryColor: '#3498db',
    secondaryColor: '#2c3e50',
    backgroundImage: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72'
  });

  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <PersonalizationContext.Provider value={{ state, setState, isPanelOpen, setIsPanelOpen }}>
      {children}
    </PersonalizationContext.Provider>
  );
};

export const usePersonalization = () => {
  const context = useContext(PersonalizationContext);
  if (!context) {
    throw new Error('usePersonalization must be used within a PersonalizationProvider');
  }
  return context;
};
