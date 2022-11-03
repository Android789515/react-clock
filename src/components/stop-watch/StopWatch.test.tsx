import { screen, render, waitFor } from '@testing-library/react';

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

    it('Does not render any laps when it hasn\'t been started', () => {
        render(
            <ThemeContextProvider>
                <StopWatch />
            </ThemeContextProvider>
        );

        const LapsComponent = screen.queryByRole(AriaRoles.list);

        expect(LapsComponent).not.toBeInTheDocument();
    });

    it('Renders a new Lap component when the lap button is pressed', async () => {
        render(
            <ThemeContextProvider>
                <StopWatch />
            </ThemeContextProvider>
        );

        const StartButton = screen.getByRole(AriaRoles.button, { name: 'Start' });

        await waitFor(() => {
            StartButton.click();
        });

        const LapButton = screen.getByRole(AriaRoles.button, { name: 'Lap' });

        await waitFor(() => {
            LapButton.click();
        });

        const NewLapComponent = screen.getByRole(AriaRoles.listItem);

        expect(NewLapComponent).toBeInTheDocument();
    });
});