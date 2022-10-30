import { useState, useEffect } from 'react';

import { Notification } from '../../notification-context/notifiationTypes';

import styles from './Notifications.module.scss';

interface Props {
    nextNotification: Notification | undefined
    clearNotification: () => void
}

const Notifications = ({ nextNotification, clearNotification }: Props) => {
    const [ isHidden, setIsHidden ] = useState(true);

    useEffect(() => {
        if (nextNotification) {
            setIsHidden(false);
        }
    }, [nextNotification]);

    const handleCloseButtonClick = () => {
        setIsHidden(true);
        clearNotification();
    };

    return (
        <div className={styles.notifications}>
            <h2 className={styles.notificationsTitle}>
                {nextNotification?.body}
            </h2>

            <button className={styles.notificationsCloseButton} />
        </div>
    );
};

export default Notifications;