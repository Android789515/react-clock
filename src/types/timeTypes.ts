export type Milliseconds = number;
export type TimeInMilliseconds = number;

export type Seconds = number;
export type TimeInSeconds = number;

type FormattedHours = `0${string}` | string;
type FormattedMinutes = `0${string}` | string;
type FormattedSeconds = `0${string}` | string;
type FormattedMilliseconds = `0${string}` | string;

export interface FormattedTime {
    hours: FormattedHours;
    minutes: FormattedMinutes;
    seconds: FormattedSeconds;
    milliseconds: FormattedMilliseconds;
}

export type StringifiedTime = (
    `${FormattedHours}:${FormattedMinutes}:${FormattedSeconds}`
    | `${FormattedHours}:${FormattedMinutes}:${FormattedSeconds}.${FormattedMilliseconds}`
);