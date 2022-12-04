import { screen, render, renderHook } from '@testing-library/react';
import { useContext } from 'react';

import type { FormattedTime } from '../../types/timeTypes';
import { AriaRoles } from '../../types/ariaTypes';
import { alarmScheduler } from '../../alarm-scheduler/alarmScheduler';

import Alarms from './Alarms';

describe('Alarms', () => {
    it('Renders an Alarm component for each alarm', () => {
        const { result } = renderHook(() => useContext(alarmScheduler));
        const { addAlarm } = result.current;
        const newAlarm: FormattedTime = { hours: '01', minutes: '02', seconds: '00', milliseconds: '00' };
        addAlarm(newAlarm);

        render(
            <Alarms />
        );

        const AlarmComponents = screen.getAllByRole(AriaRoles.listItem);
        expect(AlarmComponents).toHaveLength(1);
    });
});