import { createContext, useState } from 'react';

interface SectionsContextType {
    sectionCount: number;
    setSectionCount: React.Dispatch<React.SetStateAction<number >>;
}

export const SectionsContext = createContext<SectionsContextType | undefined>(undefined);

export const SectionsContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sectionCount, setSectionCount] = useState(0);

    return (
        <SectionsContext.Provider value={{ sectionCount, setSectionCount }}>
            {children}
        </SectionsContext.Provider>
    );
};