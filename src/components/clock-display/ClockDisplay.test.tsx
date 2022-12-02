import { screen, fireEvent, render, waitFor } from '@testing-library/react';

import { AriaRoles } from '../../types/ariaTypes';
import type { TimeInMilliseconds } from '../../types/timeTypes';
import { toMilliseconds } from '../../utils/timeConversionUtils';

import ClockDisplay from './ClockDisplay';

describe('ClockDisplay', () => {
    it('Has a timer role when disabled and a textbox role when editable', () => {
        const { rerender } = render(
            <ClockDisplay
                disabled
                timeInMilliseconds={0}
            />
        );

        const ComponentAsTimer = screen.getByRole(AriaRoles.timer);
        expect(ComponentAsTimer).toBeInTheDocument();

        rerender(
            <ClockDisplay
                disabled={false}
                timeInMilliseconds={0}
            />
        );

        const ComponentAsInput = screen.getByRole(AriaRoles.textInput);
        expect(ComponentAsInput).toBeInTheDocument();
    });

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

        const Component = screen.getByRole(AriaRoles.textInput);
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

        const UpdatedComponent = screen.getByRole(AriaRoles.textInput);
        const expectedDisplayAfterChange = '00:00:12';
        expect(UpdatedComponent).toHaveDisplayValue(expectedDisplayAfterChange);
    });

    it('Sets its displayed time when blurred', async () => {
        const setTimeFunction = {
            setTime: (time: TimeInMilliseconds) => {}
        };

        const setTimeSpy = jest.spyOn(setTimeFunction, 'setTime');

        let time: TimeInMilliseconds = 0;
        render(
            <ClockDisplay
                disabled={false}
                timeInMilliseconds={time}
                // User enters time in seconds, and it must
                // be converted to ms to be re-passed as a prop.
                setTime={setTimeFunction.setTime}
            />
        );

        const Component = screen.getByRole(AriaRoles.textInput);
        await waitFor(() => Component.focus());
        await waitFor(() => Component.blur());

        expect(setTimeSpy).toHaveBeenCalled();
    });

    it('Sets its displayed time when the enter key is pressed while focused', () => {
        const setTimeFunction = {
            setTime: (time: TimeInMilliseconds) => {}
        };

        const setTimeSpy = jest.spyOn(setTimeFunction, 'setTime');

        let time: TimeInMilliseconds = 0;
        render(
            <ClockDisplay
                disabled={false}
                timeInMilliseconds={time}
                // User enters time in seconds, and it must
                // be converted to ms to be re-passed as a prop.
                setTime={setTimeFunction.setTime}
            />
        );

        const Component = screen.getByRole(AriaRoles.textInput);
        fireEvent.keyDown(Component, { key: 'Enter' });

        expect(setTimeSpy).toHaveBeenCalled();
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

        const Component = screen.getByRole(AriaRoles.textInput);
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

        const UpdatedComponent = screen.getByRole(AriaRoles.textInput);
        const expectedDisplayAfterChange = '12:59:43';
        expect(UpdatedComponent).toHaveDisplayValue(expectedDisplayAfterChange);
    });

    it('Only accepts valid numbers when changing the time', () => {
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

        const Component = screen.getByRole(AriaRoles.textInput);
        fireEvent.change(Component, { target: { value: 'invalid' } });
        rerender(
            <ClockDisplay
                disabled={false}
                timeInMilliseconds={time}
                // User enters time in seconds, and it must
                // be converted to ms to be re-passed as a prop.
                setTime={newTime => time = toMilliseconds(newTime)}
            />
        );

        const UpdatedComponent = screen.getByRole(AriaRoles.textInput);
        const expectedDisplayAfterChange = '00:00:00';
        expect(UpdatedComponent).toHaveDisplayValue(expectedDisplayAfterChange);
    });
});