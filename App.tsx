import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { Routes } from "./src";
import { AuthProvider } from "./src/Context/AuthContext";
import {ThemeProvider} from './src/theme/theme';
export default function App() {



    return (
        <ThemeProvider>
            <AuthProvider>
            <StatusBar style="auto" />
            <Routes />
            </AuthProvider>
        </ThemeProvider>
    );
}
