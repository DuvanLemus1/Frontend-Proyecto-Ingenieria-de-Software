
import {useState, useEffect, createContext} from 'react';
import axios from 'axios';

const AuthContext = createContext();

const AuthProvider = ({children}) => {

    const [auth, setAuth] = useState({})

    useEffect(() => {
        const auntenticarUsuario = async () => {
            const token = localStorage.getItem('token')
            if(!token){
                return;
            }
            try {
                
            } catch (error) {
                
            }
        }
        auntenticarUsuario();

    }, [])

    return(
        <AuthContext.Provider
            value={{
                setAuth
            }}
            >
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthProvider
}

export default AuthContext;