import type { ReactNode } from 'react';
import { createContext, useState } from 'react';

import type { FormattedTime, StringifiedTime } from '../types/timeTypes';
import { stringifyTime } from '../utils/timeConversionUtils';

interface AlarmSchedulerFunctions {
    addAlarm: (time: FormattedTime) => void;
    removeAlarm: (time: FormattedTime) => void;
}

const alarmScheduler = createContext<AlarmSchedulerFunctions>({
    addAlarm: (time: FormattedTime) => {},
    removeAlarm: (time: FormattedTime) => {}
});

interface Props {
    children: ReactNode;
}

const AlarmSchedulerProvider = ({ children }: Props) => {
    const [ alarms, updateAlarms ] = useState<Set<StringifiedTime>>(new Set<StringifiedTime>([]));

    const addAlarm = (time: FormattedTime) => {
        const newAlarm = stringifyTime(time, false);
        updateAlarms(prevAlarms => (
            new Set<StringifiedTime>([ ...prevAlarms, newAlarm])
        ));
    };

    const removeAlarm = (time: FormattedTime) => {
        const alarmToRemove = stringifyTime(time, false);
        updateAlarms(prevAlarms => {
            const newAlarms = new Set<StringifiedTime>(prevAlarms);
            newAlarms.delete(alarmToRemove);

            return newAlarms;
        });
    };

    return (
        <alarmScheduler.Provider value={{
            addAlarm,
            removeAlarm
        }}>
            {children}
        </alarmScheduler.Provider>
    );
};

export { alarmScheduler, AlarmSchedulerProvider };