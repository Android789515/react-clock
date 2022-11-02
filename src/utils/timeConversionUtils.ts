import type { TimeInSeconds, TimeInMilliseconds, Milliseconds, FormattedTime } from '../types/timeTypes';

export const toMilliseconds = (timeInSeconds: TimeInSeconds) => {
    return timeInSeconds * 1000;
};

export const toSeconds = (timeInMilliseconds: TimeInMilliseconds) => {
    return timeInMilliseconds / 1000;
};

export const getTotalSeconds = (hours: number, minutes: number, seconds: number) => {
    return (hours * 3600) + (minutes * 60) + seconds;
};

const makeDoubleDigit = (number: number | string): string => {
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

export const formatTime = (timeInMilliseconds: TimeInMilliseconds): FormattedTime => {

    const milliseconds = removeSeconds(timeInMilliseconds);
    const significantMillisecondDigits = milliseconds / 10;
    const formattedMilliseconds = makeDoubleDigit(significantMillisecondDigits);

    const totalSeconds = Math.floor(toSeconds(timeInMilliseconds));
    const formattedSeconds = makeDoubleDigit(totalSeconds % 60);

    const totalMinutes = (totalSeconds / 60);
    const formattedMinutes = makeDoubleDigit(Math.floor(totalMinutes  % 60));

    const totalHours = (totalSeconds / 3600);
    const formattedHours = makeDoubleDigit(Math.floor(totalHours % 120));

    return {
        hours: formattedHours,
        minutes: formattedMinutes,
        seconds: formattedSeconds,
        milliseconds: formattedMilliseconds
    };
};