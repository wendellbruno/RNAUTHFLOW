import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Settings  } from "../../screens";

const Stack = createStackNavigator();

export const AppStack: React.FC = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Settings" component={Settings} />
        </Stack.Navigator>
    );
};
