import { ReactNode, createContext, useState } from 'react';

import { NotificationContextFunctions, Notification } from './notifiationTypes';

import Notifications from '../components/notifications/Notifications';

const notificationContext = createContext<NotificationContextFunctions>({
    addNotification: () => {}
});

interface Props {
    children: ReactNode
}

const NotificationContextProvider = ({ children }: Props) => {
    const [ notifications, updateNotifications ] = useState<Notification[]>([]);

    const addNotification = (notification: Notification) => {
        updateNotifications(prevNotifications => [notification, ...prevNotifications]);
    };

    return (
        <notificationContext.Provider
            value={{
                addNotification
            }}
        >
            {children}
            <Notifications
                notifications={notifications}
            />
        </notificationContext.Provider>
    );
};

export { notificationContext, NotificationContextProvider }