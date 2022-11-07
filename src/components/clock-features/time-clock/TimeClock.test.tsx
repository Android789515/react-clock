import { screen, render } from '@testing-library/react';

import { AriaRoles } from '../../../types/ariaTypes';

import TimeClock from './TimeClock';

describe('TimeClock', () => {
    it('Renders a non-editable ClockDisplay with the current local time', async () => {
        render(
            <TimeClock />
        );

        const ClockDisplay = screen.getByRole(AriaRoles.timer);

        expect(ClockDisplay).toBeInTheDocument();
        expect(ClockDisplay).toBeDisabled();

        const date = new Date();
        expect(ClockDisplay).toHaveDisplayValue(
            date.getHours() + ':'
            + date.getMinutes() + ':'
            + date.getSeconds()
        );
    });
});