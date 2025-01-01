import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from '../firebase/firebase.init';



export const AuthContext=createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);



    const createuser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const userLogin=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }


    useEffect(()=>{
      const unsubscribe=  onAuthStateChanged(auth,(currentUser=>{
            setUser(currentUser);
            console.log(currentUser);
            setLoading(false)
        }))
        return ()=>{
            return unsubscribe();
        }
    },[])

    const authInfo={
        user,
        loading,
        createuser,
        userLogin,
        logOut

    }

    return (    
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;