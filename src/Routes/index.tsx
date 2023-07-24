import { NavigationContainer } from "@react-navigation/native";
import React, { useContext } from "react";
import {AppStack} from './AppStack';
import { AuthStack } from "./AuthStack";
import { useAuth } from "../Context/AuthContext";
import { View, Text } from "react-native";

export const Routes: React.FC = () => {

    const {authData, loading} = useAuth();

    if(loading){
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text>Carregando....</Text>
        </View>
    }

    return (
        <NavigationContainer>
            {authData ? <AppStack /> : <AuthStack />}
        </NavigationContainer>
    );
};
