import React, { createContext, useState, useEffect } from 'react';
import {FieldValue } from '../Firestore/Firestore'

export const AuthContext = createContext();


export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));
   
          
        useEffect(()=>{
            const listener = FieldValue.auth().onAuthStateChanged((authUser)=>{
                if(authUser){
                        localStorage.setItem('authUser' , JSON.stringify(authUser) )
                        setUser(authUser)
                }else {
                    setUser(null)
                }
            })
            return () => listener()
        },[])
   
                
    return (
        <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
        )
}