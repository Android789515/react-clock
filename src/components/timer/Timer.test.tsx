import { render, screen } from '@testing-library/react';

import { AriaRoles } from '../../types/ariaTypes';

import { ThemeContextProvider } from '../../theme-context/themeContext';
import Timer from './Timer';

describe('Timer', () => {
    it('Renders a ClockDisplay component', () => {
        render(
            <ThemeContextProvider>
                <Timer />
            </ThemeContextProvider>
        );

        const ClockDisplay = screen.getByRole(AriaRoles.timer);

        expect(ClockDisplay).toBeInTheDocument();
    });

    it('Renders a TimerBar component', () => {
        render(
            <ThemeContextProvider>
                <Timer />
            </ThemeContextProvider>
        );

        const TimerBar = screen.getByRole(AriaRoles.progressbar);

        expect(TimerBar).toBeInTheDocument();
    });

    it('Renders a TimerButtons component', () => {
        render(
            <ThemeContextProvider>
                <Timer />
            </ThemeContextProvider>
        );

        const TimerButtons = screen.getByRole(AriaRoles.toolbar);

        expect(TimerButtons).toBeInTheDocument();
    });
});