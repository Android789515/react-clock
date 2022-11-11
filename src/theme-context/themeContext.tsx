import { ReactNode, createContext, useState, useEffect } from 'react';

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
    const themeKey = 'app/theme';

    const loadTheme = () => {
        return localStorage.getItem(themeKey) as Themes || defaultTheme;
    };

    const [ theme, setTheme ] = useState(loadTheme());

    const saveTheme = () => {
        localStorage.setItem(themeKey, theme)
    };
    useEffect(saveTheme, [theme])

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
        <themeContext.Provider value={{ getTheme, isLightTheme, isDarkTheme, toggleTheme }}>
            {children}
        </themeContext.Provider>
    );
};

export { themeContext, ThemeContextProvider };