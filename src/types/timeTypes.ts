export type Milliseconds = number;
export type TimeInMilliseconds = number;

export type TimeInSeconds = number;

type FormattedHours = string;
type FormattedMinutes = string;
type FormattedSeconds = string;
type FormattedMilliseconds = string;

export interface FormattedTime {
    hours: FormattedHours;
    minutes: FormattedMinutes;
    seconds: FormattedSeconds;
    milliseconds: FormattedMilliseconds;
}