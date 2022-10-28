import { TimeInSeconds, TimeInMilliseconds } from '../types/timeTypes';

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
    const measurableDigits = String(number);

    const isSingleDigit = measurableDigits.length < 2;
    return isSingleDigit ? '0' + number : String(number);
};

const removeSeconds = (milliseconds: TimeInMilliseconds) => {
    const secondsAndMilliseconds = toSeconds(milliseconds);
    const millisecondsOnly = String(secondsAndMilliseconds).slice(-3);

    return makeDoubleDigit(millisecondsOnly);
};

export const formatTime = (timeInMilliseconds: TimeInMilliseconds) => {

    const formattedMilliseconds = removeSeconds(timeInMilliseconds);

    const timeInSeconds = Math.floor(toSeconds(timeInMilliseconds));
    const formattedSeconds = makeDoubleDigit(timeInSeconds % 60);

    const totalMinutes = (timeInSeconds / 60) % 60;
    const formattedMinutes = makeDoubleDigit(Math.floor(totalMinutes));

    const totalHours = (timeInSeconds / 3600) % 120;
    const formattedHours = makeDoubleDigit(Math.floor(totalHours));

    return {
        hours: formattedHours,
        minutes: formattedMinutes,
        seconds: formattedSeconds,
        milliseconds: formattedMilliseconds
    };
};