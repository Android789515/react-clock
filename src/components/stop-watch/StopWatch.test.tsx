import { screen, render } from '@testing-library/react';

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

        const StopWatchButtons = screen.getByRole('toolbar');

        expect(StopWatchButtons).toBeInTheDocument();
    });

    it('Renders a TimberBar component', () => {
        render(
            <ThemeContextProvider>
                <StopWatch />
            </ThemeContextProvider>
        );

        const TimerBar = screen.getByRole('progressbar');

        expect(TimerBar).toBeInTheDocument();
    });
});