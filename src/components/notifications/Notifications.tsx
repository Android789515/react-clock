import type { Notification } from '../../notification-context/notifiationTypes';

import styles from './Notifications.module.scss';

interface Props {
    notifications: Notification[]
}

const Notifications = ({}: Props) => {
    return (
        <div className={`${styles.notifications}`}>
        </div>
    );
};

export default Notifications;