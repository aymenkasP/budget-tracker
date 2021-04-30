import React, { createContext, useState, useEffect } from 'react';
import {auth} from '../Firestore/Firestore'

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
    const [loading, setLoading] = useState(true);
           console.log(user)
        useEffect(()=> {
            const CheckUser = auth.onAuthStateChanged(user => {
                if(user)
                {localStorage.setItem('authUser' , JSON.stringify(user) )
                setUser(user)
                setLoading(false)
            }else{
                localStorage.removeItem('authUser')
                }
                
            })
            return () => CheckUser
        },[])
   
                
    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
        )
}