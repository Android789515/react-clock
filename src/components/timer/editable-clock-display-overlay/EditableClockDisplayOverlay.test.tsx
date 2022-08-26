import { render, screen, waitFor } from '@testing-library/react';

import { AriaRoles } from '../../../types/ariaTypes';

import { ThemeContextProvider } from '../../../theme-context/themeContext';
import EditableClockDisplayOverlay from './EditableClockDisplayOverlay';

describe('EditableClockDisplayOverlay', () => {
    it('When inactive, displays a normal ClockDisplay component', () => {
        render(
            <ThemeContextProvider>
                <EditableClockDisplayOverlay
                    disabled={false}
                    timeInSeconds={0}
                    updateTimeInSeconds={() => {}}
                />
            </ThemeContextProvider>
        );

        const ClockDisplay = screen.getByRole(AriaRoles.timer);

        expect(ClockDisplay).toBeInTheDocument();
    });

    it('When clicked it becomes active, displaying the editable overlay', async () => {
        render(
            <ThemeContextProvider>
                <EditableClockDisplayOverlay
                    disabled={false}
                    timeInSeconds={0}
                    updateTimeInSeconds={() => {}}
                />
            </ThemeContextProvider>
        );

        const ClockDisplay = screen.getByRole(AriaRoles.timer);

        await waitFor(() => {
            ClockDisplay.click();
        });

        const EditableClockDisplay = screen.getByRole(AriaRoles.textInput);

        expect(EditableClockDisplay).toHaveFocus();
    });

    it('Updates its displayed time when focused and typed in', async () => {
        render(
            <ThemeContextProvider>
                <EditableClockDisplayOverlay
                    disabled={false}
                    timeInSeconds={0}
                    updateTimeInSeconds={() => {}}
                />
            </ThemeContextProvider>
        );

        const ClockDisplay = screen.getByRole(AriaRoles.timer);
        fireEvent.click(ClockDisplay);

        const EditableClockDisplay = screen.getByRole(AriaRoles.textInput);

        const updatedSeconds = 12;
        fireEvent.change(EditableClockDisplay, { target: { value: updatedSeconds } });

        const expectedDisplay = '00:00:12';
        expect(EditableClockDisplay).toHaveDisplayValue(expectedDisplay);
    });
});