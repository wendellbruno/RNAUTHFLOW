import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { Routes } from "./src";
import { AuthProvider } from "./src/Context/AuthContext";

export default function App() {
    return (
        <>
            <AuthProvider>
            <StatusBar style="auto" />
            <Routes />
            </AuthProvider>
        </>
    );
}
