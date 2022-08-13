import { render, screen } from '@testing-library/react';

import { ThemeContextProvider } from '../../theme-context/themeContext';
import ClockActionButtons from './ClockActionButtons';

const blankFunction = () => {};

describe('ClockActionButtons', () => {
    it('When reset and stopped, renders an ActionButton ' +
        'component for starting the stop watch timer', () => {
        render(
            <ThemeContextProvider>
                <ClockActionButtons
                    isClockStarted={false}
                    startCounting={blankFunction}
                    stopCounting={blankFunction}
                    resetTime={blankFunction}
                />
            </ThemeContextProvider>
        );

        const startButtonName = 'Start';
        const StartButton = screen.getByText(startButtonName);

        expect(StartButton).toBeInTheDocument();
    });

    it('When started, renders an ActionButton component for saving a ' +
        'lap in place of the start button', () => {
        render(
            <ThemeContextProvider>
                <ClockActionButtons
                    isClockStarted={true}
                    startCounting={blankFunction}
                    stopCounting={blankFunction}
                    resetTime={blankFunction}
                />
            </ThemeContextProvider>
        );

        const lapButtonName = 'Lap';
        const LapButton = screen.getByText(lapButtonName);

        expect(LapButton).toBeInTheDocument();
    });

    it('Renders an ActionButton component for stopping the stop watch timer', () => {
        render(
            <ThemeContextProvider>
                <ClockActionButtons
                    isClockStarted={false}
                    startCounting={blankFunction}
                    stopCounting={blankFunction}
                    resetTime={blankFunction}
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
                <ClockActionButtons
                    isClockStarted={false}
                    startCounting={blankFunction}
                    stopCounting={blankFunction}
                    resetTime={blankFunction}
                />
            </ThemeContextProvider>
        );

        const resetButtonName = 'Reset';
        const ResetButton = screen.getByText(resetButtonName);

        expect(ResetButton).toBeInTheDocument();
    });
});