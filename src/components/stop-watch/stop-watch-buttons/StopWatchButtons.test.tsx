import { screen, render } from '@testing-library/react';

import { ThemeContextProvider } from '../../../theme-context/themeContext';
import StopWatchButtons from './StopWatchButtons';

describe('StopWatchButtons', () => {
    it('Renders an ActionButton component for starting the stop watch timer', () => {
        render(
            <ThemeContextProvider>
                <StopWatchButtons
                    startCounting={() => {}}
                    stopCounting={() => {}}
                    resetTime={() => {}}
                />
            </ThemeContextProvider>
        );

        const startButtonName = 'Start';
        const StartButton = screen.getByText(startButtonName);

        expect(StartButton).toBeInTheDocument();
    });

    it('Renders an ActionButton component for stopping the stop watch timer', () => {
        render(
            <ThemeContextProvider>
                <StopWatchButtons
                    startCounting={() => {}}
                    stopCounting={() => {}}
                    resetTime={() => {}}
                />
            </ThemeContextProvider>
        );

        const stopButtonName = 'Stop';
        const StopButton = screen.getByText(stopButtonName);

        expect(StopButton).toBeInTheDocument();
    });

    it('Renders an ActionButton component for resetting the stop watch timer', () => {
        render(
            <ThemeContextProvider>
                <StopWatchButtons
                    startCounting={() => {}}
                    stopCounting={() => {}}
                    resetTime={() => {}}
                />
            </ThemeContextProvider>
        );

        const resetButtonName = 'Reset';
        const ResetButton = screen.getByText(resetButtonName);

        expect(ResetButton).toBeInTheDocument();
    });
});