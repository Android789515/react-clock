import type { ReactNode } from 'react';
import { createContext } from 'react';

interface AlarmSchedulerFunctions {

}

const alarmScheduler = createContext<AlarmSchedulerFunctions>({

});

interface Props {
    children: ReactNode;
}

const AlarmSchedulerProvider = ({ children }: Props) => {
    return (
        <alarmScheduler.Provider value={{

        }}>
            {children}
        </alarmScheduler.Provider>
    );
};

export { alarmScheduler, AlarmSchedulerProvider };