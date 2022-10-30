import { ReactNode, createContext, useState } from 'react';

import { NotificationContextFunctions, Notification } from './notifiationTypes';

const notificationContext = createContext<NotificationContextFunctions>({
    addNotification: (notification: Notification) => {},
    getNextNotification: () => ({ body: '' })
});

interface Props {
    children: ReactNode
}

const NotificationContextProvider = ({ children }: Props) => {

    const [ notifications, updateNotifications ] = useState<Notification[]>([]);

    const addNotification = (notification: Notification) => {
        updateNotifications(prevNotifications => [...prevNotifications, notification]);
    };

    const _removeNotification = () => {
        updateNotifications(notifications.filter((notification, index) => {
            return index > 0;
        }));
    };

    const getNextNotification = () => {
        const nextNotification = notifications.at(0);
        if (nextNotification) {
            _removeNotification();
            return nextNotification;
        }
    };

    return (
        <notificationContext.Provider
            value={{
                addNotification,
                getNextNotification
            }}
        >
            {children}
        </notificationContext.Provider>
    );
};

export { notificationContext, NotificationContextProvider }