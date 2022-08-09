import { render, renderHook } from '@testing-library/react';
import { useContext } from 'react';

import Themes from '../../theme-context/themeOptions';
import { themeContext, ThemeContextProvider } from '../../theme-context/themeContext';
import ThemeSwitch from './ThemeSwitch';

describe('ThemeSwitch', () => {
    it('Toggles between the light and dark themes', () => {
        render(
            <ThemeContextProvider>
                <ThemeSwitch />
            </ThemeContextProvider>
        );

        const { result } = renderHook(() => useContext(themeContext));
        const currentThemeBeforeSwitch = result;
        const defaultTheme = Themes.light;

        expect(currentThemeBeforeSwitch).toEqual(defaultTheme);
    });
});