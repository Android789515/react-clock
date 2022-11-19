import { screen, render, waitFor } from '@testing-library/react';

import { AriaRoles } from '../../../types/ariaTypes';
import { makeDoubleDigit } from '../../../utils/timeConversionUtils';

import TimeClock from './TimeClock';

describe('TimeClock', () => {
    it('Renders a non-editable ClockDisplay with the current local time as 24h format', () => {
        render(
            <TimeClock />
        );

        const ClockDisplay = screen.getByRole(AriaRoles.timer);

        expect(ClockDisplay).toBeInTheDocument();
        expect(ClockDisplay).toBeDisabled();

        // Date hours are 24h format by default
        const date = new Date();
        const dateTimeUnits = [date.getHours(), date.getMinutes(), date.getSeconds()];

        const expectedDisplay = dateTimeUnits.map(makeDoubleDigit).join(':');
        expect(ClockDisplay).toHaveDisplayValue(expectedDisplay);
    });

    it('Renders a ToggleSwitch component for switching between AM/PM and 24h format', () => {
        render(
            <TimeClock />
        );

        const ToggleSwitch = screen.getByRole(AriaRoles.button);

        expect(ToggleSwitch).toBeInTheDocument();
    });

    it('Displays 12h format when the toggle switch is toggled on', async () => {
        render(
            <TimeClock />
        );

        const ToggleSwitch = screen.getByRole(AriaRoles.button);

        await waitFor(() => {
            ToggleSwitch.click();
        });

        const ClockDisplay = screen.getByRole(AriaRoles.timer);

        const date = new Date();
        const isPastNoon = date.getHours() > 12;

        const afternoonHours = 12;
        const adjustedHours = isPastNoon ? date.getHours() - afternoonHours : date.getHours();
        const dateTimeUnits = [adjustedHours, date.getMinutes(), date.getSeconds()];

        const expectedDisplay = dateTimeUnits.map(makeDoubleDigit).join(':');
        expect(ClockDisplay).toHaveDisplayValue(expectedDisplay);
    });
});