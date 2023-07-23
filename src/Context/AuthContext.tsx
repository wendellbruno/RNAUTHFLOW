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
}

type Props = {
    children? : React.ReactNode
}
export const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ({children}) => {

    const [authData, setAuthData] = useState<AuthData>();

    async function signIn(email: string, password: string): Promise<AuthData>{
        //chamada da API
        const auth = await authService.signIn(email,password)
        setAuthData(authData);
        return auth;
    }

   async function signOut(): Promise<void>{
        //logout da aplicação
        setAuthData(undefined);
    }

    return  (
        <AuthContext.Provider value={{authData, signIn, signOut}}>
            {children}
        </AuthContext.Provider>
    )
}

//hook perssonalizado
export function useAuth(){
    const context = useContext(AuthContext);
    return context;
}

/* export interface AuthData {
  token: string;
  email: string;
  name: string;
}

interface AuthContextData {
  authData?: AuthData;
  signIn: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  isLoading: boolean;
}

type Props = {
    children?: React.ReactNode
  };

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC<Props> = ({children}) =>{
  const [authData, setAuthData] = useState<AuthData>();
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    loadStorageData();
  }, []);

  async function loadStorageData(): Promise<void> {
    try {
      //Try get the data from Async Storage
      const authDataSerialized = await AsyncStorage.getItem('@AuthData');
      if (authDataSerialized) {
        //If there are data, it's converted to an Object and the state is updated.
        const _authData: AuthData = JSON.parse(authDataSerialized);
        setAuthData(_authData);
      }
    } catch (error) {
    } finally {
      setisLoading(false);
    }
  }

  async function signIn(email: string, password: string) {
    try {
      const authData = await authService.signIn(email, password);

      setAuthData(authData);
      AsyncStorage.setItem('@AuthData', JSON.stringify(authData));
    } catch (error) {
      Alert.alert(error.message, 'Tente novamente');
    }
  }
  async function signOut() {
    setAuthData(undefined);
    AsyncStorage.removeItem('@AuthData');
  }

  return (
    <AuthContext.Provider value={{authData, signIn, signOut, isLoading}}>
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }

  return context;
} */