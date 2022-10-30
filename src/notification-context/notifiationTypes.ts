export type NotificationBody = string;

export interface Notification {
    body: NotificationBody
}

export interface NotificationContextFunctions {
    addNotification: (notification: Notification) => void
}