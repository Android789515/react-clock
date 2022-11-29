import type { TimeInSeconds, TimeInMilliseconds } from '../types/timeTypes';
import type { Milliseconds, Seconds, FormattedTime } from '../types/timeTypes';

export const toMilliseconds = (timeInSeconds: TimeInSeconds) => {
    return timeInSeconds * 1000;
};

export const toSeconds = (timeInMilliseconds: TimeInMilliseconds) => {
    return timeInMilliseconds / 1000;
};

export const getTotalSeconds = (hours: number, minutes: number, seconds: number) => {
    return (hours * 3600) + (minutes * 60) + seconds;
};

export const makeDoubleDigit = (number: number | string): string => {
    const digitAmount = String(number).length;

    if (digitAmount < 2) {
        return '0' + number;
    } else {
        return String(number);
    }
};

const removeSeconds = (milliseconds: Milliseconds) => {
    return Number(String(milliseconds).slice(-3));
};

const formatMilliseconds = (timeInMilliseconds: TimeInMilliseconds) => {
    const milliseconds = removeSeconds(timeInMilliseconds);
    const significantMillisecondDigits = Math.floor(milliseconds / 10);
    const formattedMilliseconds = makeDoubleDigit(significantMillisecondDigits);

    return formattedMilliseconds;
};

const formatSeconds = (totalSeconds: Seconds) => {
    const formattedSeconds = makeDoubleDigit(totalSeconds % 60);

    return formattedSeconds;
};

const formatMinutes = (totalSeconds: Seconds) => {
    const totalMinutes = (totalSeconds / 60);
    const formattedMinutes = makeDoubleDigit(Math.floor(totalMinutes  % 60));

    return formattedMinutes;
};

const formatHours = (totalSeconds: Seconds) => {
    const totalHours = (totalSeconds / 3600);
    const formattedHours = makeDoubleDigit(Math.floor(totalHours % 120));

    return formattedHours;
};

export const formatTime = (timeInMilliseconds: TimeInMilliseconds): FormattedTime => {
    const milliseconds = formatMilliseconds(timeInMilliseconds);

    const totalSeconds = Math.floor(toSeconds(timeInMilliseconds));
    const seconds = formatSeconds(totalSeconds);
    const minutes = formatMinutes(totalSeconds);
    const hours = formatHours(totalSeconds);

    return {
        hours,
        minutes,
        seconds,
        milliseconds,
    };
};

export const stringifyTime = (formattedTime: FormattedTime, showMilliseconds: boolean) => {
    const { hours, minutes, seconds, milliseconds } = formattedTime;

    const stringifiedTime = `${hours}:${minutes}:${seconds}`;
    const stringifiedMilliseconds = `.${milliseconds}`;

    if (showMilliseconds) {
        return stringifiedTime + stringifiedMilliseconds;
    } else {
        return stringifiedTime;
    }
};