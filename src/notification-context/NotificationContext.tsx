import { ReactNode, createContext } from 'react';

import { NotificationContextFunctions } from './notifiationTypes';

const notificationContext = createContext<NotificationContextFunctions>({
    notify: () => {}
});

interface Props {
    children: ReactNode
}

const NotificationContextProvider = ({ children }: Props) => {
    const notify = () => {

    };

    return (
        <notificationContext.Provider
            value={{
                notify
            }}
        >
            {children}
        </notificationContext.Provider>
    );
};

export { notificationContext, NotificationContextProvider }