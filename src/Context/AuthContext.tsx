import React, {createContext, useContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {authService} from '../Service/authService';
import {Alert} from 'react-native';


export interface AuthData{
    token: string;
    email: string;
    name: string;
}


//dados que serão importados do context
interface AuthContextData{
    authData?: AuthData;
    signIn: (email: string, password: string) => Promise<AuthData>
    signOut: () => Promise<void>;
    loading: boolean
}

type Props = {
    children? : React.ReactNode
}
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ({children}) => {

    const [authData, setAuthData] = useState<AuthData>();
    const [loading, setLoading] = useState(true);


    useEffect(() =>{
        loadFromStorage();
    },[])



    async function loadFromStorage(){
        const auth = await AsyncStorage.getItem('@AuthData');
        if(auth){
            setAuthData(JSON.parse(auth) as AuthData);
        }
        setLoading(false)
    }

    async function signIn(email: string, password: string){
        //chamada da API
        try {
            const auth = await authService.signIn(email,password)
            setAuthData(auth);
            AsyncStorage.setItem('@AuthData', JSON.stringify(auth));
            return auth;
        } catch (error) {
            Alert.alert(error.message, 'tente novamente');
        }
    }

   async function signOut(): Promise<void>{
        //logout da aplicação
        setAuthData(undefined);
        AsyncStorage.removeItem('@AuthData');
    }

    return  (
        <AuthContext.Provider value={{authData, loading, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

//hook perssonalizado
export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}