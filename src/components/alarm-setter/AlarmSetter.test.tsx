import { screen, render, waitFor, renderHook } from '@testing-library/react';
import { useContext } from 'react';

import { AriaRoles } from '../../types/ariaTypes';
import { alarmScheduler } from '../../alarm-scheduler/alarmScheduler';

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

    it('Creates a new alarm when the ClockDisplay component\'s time is submitted', async () => {
        const { result } = renderHook(() => useContext(alarmScheduler));
        const { current: alarmFunctions } = result;

        const addAlarmSpy = jest.spyOn(alarmFunctions, 'addAlarm');

        render(
            <AlarmSetter />
        );

        const ClockDisplay = screen.getByRole(AriaRoles.textInput);
        await waitFor(() => ClockDisplay.focus());
        // It can be blurred or have enter key pressed.
        // Blur is easier, no need to import fireEvent.
        await waitFor(() => ClockDisplay.blur());

        expect(addAlarmSpy).toHaveBeenCalled();
    });
});