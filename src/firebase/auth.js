import { onAuthStateChanged, signOut as authSignOut } from 'firebase/auth';
import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { auth } from './firebase';

const AuthUserContext = createContext({
    authUser: null,
    isLoading: true
});

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    const clear = () => {
        setAuthUser(null);
        setIsLoading(false);
    };

    
    const signOut = useCallback(() => authSignOut(auth).then(clear), []);
    
    useEffect(() => {
        const authStateChanged = async (user) => {
            setIsLoading(true);
            if (!user) {
                clear();
                return;
            }
            if (user.email !== 'jplee219@gmail.com') {
                clear();
                signOut();
                return;
            }
            setAuthUser({
                uid: user.uid,
                email: user.email
            });
            setIsLoading(false);
        };
        const unsubscribe = onAuthStateChanged(auth, authStateChanged);
        return () => unsubscribe();
    }, [isLoading, signOut]);

    return {
        authUser,
        isLoading,
        signOut
    }
}

export function AuthUserProvider({ children }) {
    const auth = useFirebaseAuth();
    return <AuthUserContext.Provider value={auth}>{children}</AuthUserContext.Provider>
}

export const useAuth = () => useContext(AuthUserContext);