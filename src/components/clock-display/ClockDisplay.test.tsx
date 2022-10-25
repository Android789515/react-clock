import { screen, render, fireEvent } from '@testing-library/react';

import { AriaRoles } from '../../types/ariaTypes';

import ClockDisplay from './ClockDisplay';

describe('ClockDisplay', () => {

    it('Takes an optional prop instructing whether to display the milliseconds', () => {
        const millisecondsToTest = 9_857_655;

        render(
            <ClockDisplay
                disabled={true}
                showMilliseconds={true}
                timeInMilliseconds={millisecondsToTest}
                updateTimeInSeconds={() => {}}
            />
        );

        const DisplayElement = screen.getByRole(AriaRoles.timer);
        const expectedDisplayResult = '02:44:17.655';
        expect(DisplayElement).toHaveDisplayValue(expectedDisplayResult);
    });

    it('Updates its displayed time when focused and typed in', async () => {
        render(
            <ClockDisplay
                disabled={true}
                timeInMilliseconds={0}
                updateTimeInSeconds={() => {}}
            />
        );

        const DisplayElement = screen.getByRole(AriaRoles.timer);

        const updatedSeconds = 12;
        fireEvent.change(DisplayElement, { target: { value: updatedSeconds } });

        const expectedDisplay = '00:00:12';
        expect(DisplayElement).toHaveDisplayValue(expectedDisplay);
    });
});