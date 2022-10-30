export interface Notification {
    body: Text
}

export interface NotificationContextFunctions {
    notify: (notification: Notification) => void
}