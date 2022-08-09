import { ReactNode, createContext, useState } from 'react';

import Themes from './themeOptions';

const themeContext = createContext<any>(undefined);

interface Props {
    children: ReactNode;
}
const ThemeContextProvider = ({ children }: Props) => {
    const [ theme, setTheme ] = useState(Themes.light);

    const getTheme = () => theme;
    const isLightTheme = () => Object.is(theme, Themes.light);
    const isDarkTheme = () => Object.is(theme, Themes.dark);

    const toggleTheme = () => {
        const isLightTheme = Object.is(theme, Themes.light);

        if (isLightTheme) {
            setTheme(Themes.dark);
        } else {
            setTheme(Themes.light);
        }
    }

    return (
        <themeContext.Provider value={{ getTheme, toggleTheme, isLightTheme, isDarkTheme }}>
            {children}
        </themeContext.Provider>
    )
}

export { themeContext, ThemeContextProvider };