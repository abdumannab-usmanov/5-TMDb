import { createContext, useState, useEffect } from "react";


export const AuthContext = createContext()


export const AuthProvider = ({children}) => {

    const localData = JSON.parse(localStorage.getItem("token"))
    const [token, setToken] = useState(localData)

    useEffect(() => {
        if(token){
            window.localStorage.setItem("token", JSON.stringify(token))
        }else {
            window.localStorage.removeItem("token")
        }
    },[token])

    return(
        <AuthContext.Provider value={{token, setToken}}>
            {children}
        </AuthContext.Provider>
    )
}