import { useEffect } from 'react';
import {useAuthStore} from "@/stores/auth-stores.ts";

export const useAuthInit = () => {
    const { isAuthenticated } = useAuthStore();

    useEffect(() => {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('Auth Store');

        if (token && userData) {
            try {
                const parsedData = JSON.parse(userData);
                if (parsedData.state.isAuthenticated && !isAuthenticated) {
                    useAuthStore.setState({
                        isAuthenticated: true,
                        user: parsedData.state.user,
                        isAdmin: parsedData.state.isAdmin,
                    });
                }
            } catch (error) {
                console.error('Error parsing auth data:', error);
            }
        }
    }, [isAuthenticated]);
};