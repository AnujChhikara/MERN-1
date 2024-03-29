import { createContext, useContext, useState } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem('token'))

    const storeTokeninLS = (serverToken) =>  {
        return localStorage.setItem('token', serverToken)        
    }

    let isLoggedIn = !!token

    // logout functionality
    const LogoutUser = () => {
        setToken("")
        return localStorage.removeItem('token')

    }

    return <AuthContext.Provider value={{storeTokeninLS, LogoutUser, isLoggedIn}}>{children}</AuthContext.Provider>

}


export const useAuth = () => {
    return useContext(AuthContext)
}