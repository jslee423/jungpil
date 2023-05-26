import { onAuthStateChanged, signOut as authSignOut } from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
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

    const authStateChanged = async (user) => {
        console.log('auth user', user);
        console.log('isLoading', isLoading);
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

    const signOut = () => authSignOut(auth).then(clear);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, authStateChanged);
        return () => unsubscribe();
    }, []);

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