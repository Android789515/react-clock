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

        const Component = screen.getByRole(AriaRoles.timer);

        expect(Component).toBeInTheDocument();
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

        const Component = screen.getByRole(AriaRoles.timer);

        await waitFor(() => {
            Component.click();
        });

        const UpdatedComponent = screen.getByRole(AriaRoles.textInput);

        expect(UpdatedComponent).toHaveFocus();
    });
});