import { useContext } from 'react';
import { SectionsContext } from '../context/SectionContext';

export const useSections = () => {
    const context = useContext(SectionsContext);
    if (!context) {
        throw new Error('useSections must be used within a SectionsProvider');
    }
    return context;
};