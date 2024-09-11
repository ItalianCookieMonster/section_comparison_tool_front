import { useState, useEffect } from 'react';
import { refreshToken } from '../services/authService';
import { ACCESS_TOKEN } from '../../../config/constants';
import {jwtDecode} from 'jwt-decode';

export const useAuth = () => {
    const [isAuthorized, setIsAuthorized] = useState<boolean | null>(null);

    useEffect(() => {
        auth().catch(() => setIsAuthorized(false))
    }, []);

    const auth = async () => {
        const token = localStorage.getItem(ACCESS_TOKEN);
        if (!token) {
            setIsAuthorized(false);
            return;
        }
        const decoded = jwtDecode(token);
        const tokenExpiration = decoded.exp;
        const now = Date.now() / 1000;

        if (tokenExpiration && tokenExpiration < now) {
            console.log('Token expired, refreshing...');
            await refreshToken();
        } else {
            setIsAuthorized(true);
        }
    };


    return { isAuthorized };
};