import React, { createContext, ReactNode, useState } from 'react';

import Themes from './themeOptions';

const themeContext = createContext({});

interface Props {
    children: ReactNode;
}
const ThemeContextProvider = ({ children }: Props) => {
    const [ theme, setTheme ] = useState(Themes.light);

    const getTheme = () => theme;
    const toggleTheme = () => {
        const isLightTheme = Object.is(theme, Themes.light);

        if (isLightTheme) {
            setTheme(Themes.dark);
        } else {
            setTheme(Themes.light);
        }
    }

    return (
        <themeContext.Provider value={{ getTheme, toggleTheme }}>
            {children}
        </themeContext.Provider>
    )
}

export { themeContext, ThemeContextProvider };