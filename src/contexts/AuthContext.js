import React, { useContext, useEffect, useState } from "react";
import "../firebase";
import {
    getAuth,
    createUserWithEmailAndPassword,
    updateProfile,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

const AutoContext = React.createContext();

export function useAuth() {
    return useContext(AutoContext);
}

export function AuthProvider({ children }) {
    const [loading, setLoading] = useState(true);
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    //signup function
    async function signUp(email, password, username) {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password);

        // update profile
        await updateProfile(auth.currentUser, {
            displayName: username,
        });

        const user = auth.currentUser;
        setCurrentUser({
            ...user,
        });
    }

    // login function
    function login(email, password) {
        const auth = getAuth();
        return signInWithEmailAndPassword(auth, email, password);
    }

    // logout function
    function logout() {
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {
        currentUser,
        signUp,
        login,
        logout,
    };

    return <AutoContext.Provider value={value}>{!loading && children}</AutoContext.Provider>;
}
