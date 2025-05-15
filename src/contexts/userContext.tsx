import { createContext } from "react";

// Contexto
export const UserContext = createContext({});

// Provider - Segurança
export default function UserContextProvider({children}: any){
    const contextValue = { nome: 'Ramon'}

    return (
    <UserContext.Provider value={contextValue}>
        {children}
    </UserContext.Provider>
)
}
