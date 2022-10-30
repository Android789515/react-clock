import { Notification } from '../../notification-context/notifiationTypes';

import styles from './Notifications.module.scss';

interface Props {
    notifications: Notification[]
    getNextNotification: () => Notification | undefined
}

const Notifications = ({ notifications, getNextNotification }: Props) => {
    return (
        <div className={styles.notifications}>
            <h2 className={styles.notificationsTitle}>
                Some notification!
            </h2>

            <button className={styles.notificationsCloseButton} />
        </div>
    );
};

export default Notifications;