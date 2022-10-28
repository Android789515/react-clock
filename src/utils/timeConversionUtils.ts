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
    return Number(String(milliseconds).slice(-3));
};

export const formatTime = (timeInMilliseconds: TimeInMilliseconds) => {

    const milliseconds = removeSeconds(timeInMilliseconds);
    const formattedMilliseconds = makeDoubleDigit(milliseconds);

    const totalSeconds = Math.floor(toSeconds(timeInMilliseconds));
    const formattedSeconds = makeDoubleDigit(totalSeconds % 60);

    const totalMinutes = (totalSeconds / 60);
    const formattedMinutes = makeDoubleDigit(Math.floor(totalMinutes  % 60));

    const totalHours = (totalSeconds / 3600);
    const formattedHours = makeDoubleDigit(Math.floor(totalHours % 120));

    return {
        formattedHours,
        formattedMinutes,
        formattedSeconds,
        formattedMilliseconds
    };
};