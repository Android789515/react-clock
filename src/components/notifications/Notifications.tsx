import { Notification } from '../../notification-context/notifiationTypes';

import styles from './Notifications.module.scss'

interface Props {
    notifications: Notification[]
    getNextNotification: () => Notification | undefined
}

const Notifications = ({ notifications, getNextNotification }: Props) => {
    return (
        <div>

        </div>
    );
};

export default Notifications;