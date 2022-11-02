import { render, screen } from '@testing-library/react';

import { AriaRoles } from '../../types/ariaTypes';

import { ThemeContextProvider } from '../../theme-context/themeContext';
import StopWatch from './StopWatch';

describe('StopWatch', () => {
    it('Renders a ClockDisplay component', () => {
        render(
            <ThemeContextProvider>
                <StopWatch />
            </ThemeContextProvider>
        );

        const ClockDisplay = screen.getByRole(AriaRoles.timer);

        expect(ClockDisplay).toBeInTheDocument();
    });

    it('Renders a StopWatchButtons component, which has all the buttons for this feature', () => {
        render(
            <ThemeContextProvider>
                <StopWatch />
            </ThemeContextProvider>
        );

        const StopWatchButtons = screen.getByRole(AriaRoles.toolbar);

        expect(StopWatchButtons).toBeInTheDocument();
    });

    it('Renders a Laps component', () => {
        render(
            <ThemeContextProvider>
                <StopWatch />
            </ThemeContextProvider>
        );

        const LapsComponent = screen.getByRole(AriaRoles.list);

        expect(LapsComponent).toBeInTheDocument();
    });
});