import { screen, render } from '@testing-library/react';

import { AriaRoles } from '../../types/ariaTypes';

import ClockDisplay from './ClockDisplay';

describe('ClockDisplay', () => {
    it('Takes a time in seconds and displays a formatted version, hours:minutes:seconds', () => {
        const secondsToTest = 3755;

        render(<ClockDisplay timeInMilliseconds={secondsToTest} />);

        const DisplayElement = screen.getByRole(AriaRoles.timer);

        const expectedDisplayResult = '01:02:35';
        const actualDisplayResult = DisplayElement.textContent;

        expect(actualDisplayResult).toEqual(expectedDisplayResult);
    });
});