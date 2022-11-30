import type { ReactNode } from 'react';
import { createContext, useState } from 'react';

import type { FormattedTime, StringifiedTime } from '../types/timeTypes';

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
    const [ alarms, updateAlarms ] = useState<StringifiedTime[]>([]);

    const addAlarm = (time: FormattedTime) => {

    };

    const removeAlarm = (time: FormattedTime) => {

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