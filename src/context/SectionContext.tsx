import { createContext, useState } from 'react';

interface SectionsContextType {
    sections: { path: string }[];
    addSection: () => void;
}

export const SectionsContext = createContext<SectionsContextType | undefined>(undefined);

export const SectionsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [sections, setSections] = useState<{ path: string }[]>([]);

    const addSection = () => {
        const newSectionId = sections.length + 1;
        const newSection = { path: `section-${newSectionId}` };
        setSections([...sections, newSection]);
    };

    return (
        <SectionsContext.Provider value={{ sections, addSection }}>
            {children}
        </SectionsContext.Provider>
    );
};