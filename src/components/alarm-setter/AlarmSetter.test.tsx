import { screen, render, renderHook } from '@testing-library/react';

import { AriaRoles } from '../../types/ariaTypes';

import AlarmSetter from './AlarmSetter';

describe('AlarmSetter', () => {
    it('Should have the text "Set alarm for:"', () => {
        render(
            <AlarmSetter />
        );

        const expectedText = screen.getByText('Set alarm for:');
        expect(expectedText).toBeInTheDocument();
    });

    it('Renders a ClockDisplay component for typing in a time for an alarm', () => {
        render(
            <AlarmSetter />
        );

        const ClockDisplay = screen.getByRole(AriaRoles.textInput);
        expect(ClockDisplay).toBeInTheDocument();
    });
});