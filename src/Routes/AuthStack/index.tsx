import React from 'react';
import { View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import {SignInScreen} from '../../screens';

const Stack = createStackNavigator();

// import { Container } from './styles';

export const AuthStack: React.FC = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='AuthStack' component={SignInScreen} />
    </Stack.Navigator>
  )
}
