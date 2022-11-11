import { screen, render } from '@testing-library/react';

import { AriaRoles } from '../../types/ariaTypes';

import { ThemeContextProvider } from '../../theme-context/themeContext';
import AppHeader from './AppHeader';

describe('AppHeader', () => {
    it('Renders a ClockFeatureLinks component for linking to other clock features', () => {
        render(
            <ThemeContextProvider>
                <AppHeader />
            </ThemeContextProvider>
        );

        const ClockFeatureLinksComponent = screen.getByRole(AriaRoles.list);

        expect(ClockFeatureLinksComponent).toBeInTheDocument();
    });

    it('Renders a ToggleSwitch component for switching the app theme', () => {
        render(
            <ThemeContextProvider>
                <AppHeader />
            </ThemeContextProvider>
        );

        const ToggleSwitchComponent = screen.getByRole(AriaRoles.button);

        expect(ToggleSwitchComponent).toBeInTheDocument();
    });
});