import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import {AppStack} from './AppStack';
import { AuthStack } from "./AuthStack";
import { useAuth } from "../Context/AuthContext";

export const Routes: React.FC = () => {

    const {authData} = useAuth()

    return (
        <NavigationContainer>
            {authData ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};
