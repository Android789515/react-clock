import { screen, render } from '@testing-library/react';

import { AriaRoles } from '../../types/ariaTypes';

import { ThemeContextProvider } from '../../theme-context/themeContext';
import AppHeader from './AppHeader';

describe('AppHeader', () => {
    it('Renders a ThemeSwitch component', () => {
        render(
            <ThemeContextProvider>
                <AppHeader />
            </ThemeContextProvider>
        );

        const ThemeSwitchComponent = screen.getByRole(AriaRoles.button);

        expect(ThemeSwitchComponent).toBeInTheDocument();
    });
});