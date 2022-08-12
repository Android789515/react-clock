import { createContext, ReactNode, useState } from 'react';

import Themes from './themeOptions';

export interface ThemeContextFunctions {
    getTheme: () => Themes.light | Themes.dark;
    isLightTheme: () => boolean;
    isDarkTheme: () => boolean;
    toggleTheme: () => void;
}

const defaultTheme = Themes.light;

const themeContext = createContext<ThemeContextFunctions>({
    getTheme: () => defaultTheme,
    isLightTheme: () => false,
    isDarkTheme: () => false,
    toggleTheme: () => {}
});

interface Props {
    children: ReactNode;
}

const ThemeContextProvider = ({ children }: Props) => {
    const [ theme, setTheme ] = useState(defaultTheme);

    const getTheme = () => theme;
    const isLightTheme = () => Object.is(theme, Themes.light);
    const isDarkTheme = () => Object.is(theme, Themes.dark);

    const toggleTheme = () => {
        if (isLightTheme()) {
            setTheme(Themes.dark);
        } else {
            setTheme(Themes.light);
        }
    };

    return (
        <themeContext.Provider value={{ getTheme, toggleTheme, isLightTheme, isDarkTheme }}>
            {children}
        </themeContext.Provider>
    )
}

export { themeContext, ThemeContextProvider };