import { createContext, useState } from "react";

// Tipagem
interface UserContextProps {
    nome: string;
    loginName: string;
    save:(user:string) => void;
}

// Contexto
export const UserContext = createContext<UserContextProps | undefined>(
    undefined
);

// Provider - Segurança
export default function UserContextProvider({children}: any){
    const [loginName, setLoginName] = useState<string>("") ;
    const contextValues: UserContextProps = { nome: 'Ramon', loginName: loginName, save: saveLoginUserToCache};

    function saveLoginUserToCache(user:string){
        if(user === ''){
            setLoginName(user)
        }
    }

    return (
    <UserContext.Provider value={contextValues}>
        {children}
    </UserContext.Provider>
)
}
