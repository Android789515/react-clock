import { ReactNode, createContext, useState } from 'react';

import Themes from './themeOptions';

const themeContext = createContext<any>(undefined);

interface Props {
    children: ReactNode;
}
const ThemeContextProvider = ({ children }: Props) => {
    const [ theme, setTheme ] = useState(Themes.dark);

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