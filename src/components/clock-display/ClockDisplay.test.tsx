import { screen, render } from '@testing-library/react';

import { AriaRoles } from '../../types/ariaTypes';

import ClockDisplay from './ClockDisplay';

describe('ClockDisplay', () => {
    it('Takes a time in milliseconds and displays a formatted version, hours:minutes:seconds', () => {
        const millisecondsToTest = 3_755_000;

        render(
            <ClockDisplay
                timeInMilliseconds={millisecondsToTest}
            />
        );

        const DisplayElement = screen.getByRole(AriaRoles.timer);

        const expectedDisplayResult = '01:02:35';
        const actualDisplayResult = DisplayElement.textContent;

        expect(actualDisplayResult).toEqual(expectedDisplayResult);
    });

    it('Takes an optional prop instructing whether to display the milliseconds', () => {
        const millisecondsToTest = 9_857_655;

        render(
            <ClockDisplay
                timeInMilliseconds={millisecondsToTest}
                showMilliseconds={true}
            />
        );

        const DisplayElement = screen.getByRole(AriaRoles.timer);

        const expectedDisplayResult = '02:44:17.55';
        const actualDisplayResult = DisplayElement.textContent;

        expect(actualDisplayResult).toEqual(expectedDisplayResult);
    });
});