/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () =>{
    const auth = useContext(AuthContext)
    return auth
}

export const AuthProvider = ({ children }) =>{
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    
    const login = () =>{
        setIsAuthenticated(true)
    }

    const logout = () =>{
        setIsAuthenticated(false)
    }

    return (
        <AuthContext.Provider value={{isAuthenticated, login, logout}}>
            {children}
        </AuthContext.Provider>
    )
}
