import { createContext, useContext } from "react";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

    const storeTokeninLS = (serverToken) =>  {
        return localStorage.setItem('token', serverToken)
         
    }

    return <AuthContext.Provider value={storeTokeninLS}>{children}</AuthContext.Provider>

}


export const useAuth = () => {
    return useContext(AuthContext)
}