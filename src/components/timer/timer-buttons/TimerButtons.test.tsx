import { render, screen } from '@testing-library/react';

import { AriaRoles } from '../../../types/ariaTypes';

import { ThemeContextProvider } from '../../../theme-context/themeContext';
import TimerButtons from './TimerButtons';

const blankFunction = () => {};

describe('TimerButtons', () => {
    it('Renders an ActionButton component for starting the timer', () => {
        render(
            <ThemeContextProvider>
                <TimerButtons
                    startTimer={blankFunction}
                    stopTimer={blankFunction}
                    resetTimer={blankFunction}
                />
            </ThemeContextProvider>
        );

        const actionName = 'Start';
        const StartButton = screen.getByRole(AriaRoles.button, { name: actionName });

        expect(StartButton).toBeInTheDocument()
    });

    it('Renders an ActionButton component for stopping the timer', () => {
        render(
            <ThemeContextProvider>
                <TimerButtons
                    startTimer={blankFunction}
                    stopTimer={blankFunction}
                    resetTimer={blankFunction}
                />
            </ThemeContextProvider>
        );

        const actionName = 'Stop';
        const StopButton = screen.getByRole(AriaRoles.button, { name: actionName });

        expect(StopButton).toBeInTheDocument()
    });

    it('Renders an ActionButton component for resetting the timer', () => {
        render(
            <ThemeContextProvider>
                <TimerButtons
                    startTimer={blankFunction}
                    stopTimer={blankFunction}
                    resetTimer={blankFunction}
                />
            </ThemeContextProvider>
        );

        const actionName = 'Reset';
        const ResetButton = screen.getByRole(AriaRoles.button, { name: actionName });

        expect(ResetButton).toBeInTheDocument()
    });
});