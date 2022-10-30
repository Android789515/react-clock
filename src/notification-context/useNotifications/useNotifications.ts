import { useState } from 'react';

import { Notification } from '../notifiationTypes';

const useNotifications = () => {
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

    return {
        addNotification,
        getNextNotification
    };
};

export default useNotifications;