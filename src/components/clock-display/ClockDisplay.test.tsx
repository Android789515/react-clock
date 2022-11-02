import { screen, fireEvent, render } from '@testing-library/react';

import { AriaRoles } from '../../types/ariaTypes';
import type { TimeInMilliseconds } from '../../types/timeTypes';
import { toMilliseconds } from '../../utils/timeConversionUtils';

import ClockDisplay from './ClockDisplay';

describe('ClockDisplay', () => {
    it('Displays a formatted time in milliseconds ' +
        'as hours:minutes:seconds.milliseconds (milliseconds are optional)', () => {

        const millisecondsToTest = 9_857_655;
        render(
            <ClockDisplay
                disabled={true}
                timeInMilliseconds={millisecondsToTest}
            />
        );

        const Component = screen.getByRole(AriaRoles.timer);
        const expectedDisplay = '02:44:17';

        expect(Component).toHaveDisplayValue(expectedDisplay);
    });

    it('Can change its displayed time by updating the ' +
        'time passed to it when input is enabled', () => {

        let time: TimeInMilliseconds = 0;
        const { rerender } = render(
            <ClockDisplay
                disabled={false}
                timeInMilliseconds={time}
                // User enters time in seconds, and it must
                // be converted to ms to be re-passed as a prop.
                setTime={newTime => time = toMilliseconds(newTime)}
            />
        );

        const Component = screen.getByRole(AriaRoles.timer);
        fireEvent.change(Component, { target: { value: '12' } });
        rerender(
            <ClockDisplay
                disabled={false}
                timeInMilliseconds={time}
                // User enters time in seconds, and it must
                // be converted to ms to be re-passed as a prop.
                setTime={newTime => time = toMilliseconds(newTime)}
            />
        );

        const UpdatedComponent = screen.getByRole(AriaRoles.timer);
        const expectedDisplayAfterChange = '00:00:12';
        expect(UpdatedComponent).toHaveDisplayValue(expectedDisplayAfterChange);
    });

    it('Accepts a new display time of up to 6 characters', () => {

        let time: TimeInMilliseconds = 0;
        const { rerender } = render(
            <ClockDisplay
                disabled={false}
                timeInMilliseconds={time}
                // User enters time in seconds, and it must
                // be converted to ms to be re-passed as a prop.
                setTime={newTime => time = toMilliseconds(newTime)}
            />
        );

        const Component = screen.getByRole(AriaRoles.timer);
        fireEvent.change(Component, { target: { value: '1259436' } });
        rerender(
            <ClockDisplay
                disabled={false}
                timeInMilliseconds={time}
                // User enters time in seconds, and it must
                // be converted to ms to be re-passed as a prop.
                setTime={newTime => time = toMilliseconds(newTime)}
            />
        );

        const UpdatedComponent = screen.getByRole(AriaRoles.timer);
        const expectedDisplayAfterChange = '12:59:43';
        expect(UpdatedComponent).toHaveDisplayValue(expectedDisplayAfterChange);
    });
});