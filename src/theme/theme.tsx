import { createContext, useState } from "react";
import { ThemeProvider as ThemeProviderStyles } from "styled-components/native";
import { darkTheme } from "./darkTheme";
import { lightTheme } from "./ligthTheme";

export enum ThemeType {
    light = "light",
    dark = "dark",
}

export const ThemeContext = createContext({
    theme: ThemeType.light,
    toggleTheme: () => {},
});
const themes = {
    dark: darkTheme,
    light: lightTheme,
};

type Props = {
    children?: React.ReactNode;
};
export const ThemeProvider: React.FC<Props> = ({ children }) => {
    const [theme, setTheme] = useState(ThemeType.light);


    function toggleTheme() {
        if (theme === ThemeType.light) {
            setTheme(ThemeType.dark);
        } else {
            setTheme(ThemeType.light);
        }
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            <ThemeProviderStyles theme={themes[theme]}>
                {children}
            </ThemeProviderStyles>
        </ThemeContext.Provider>
    );
};
