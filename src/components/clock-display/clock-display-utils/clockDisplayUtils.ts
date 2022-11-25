import { segmentString } from '../../../utils/stringUtils';

export const validateTimeEntered = (timeEntered: string) => {
    const isTimeEnteredValidNumber = !Object.is(Number(timeEntered), NaN);

    if (isTimeEnteredValidNumber) {
        return timeEntered;
    } else {
        const previousValidTime = timeEntered.slice(0, timeEntered.length - 1);
        return previousValidTime;
    }
};

// Called after validating the time entered.
export const removeLeadingZeros = (validTimeEntered: string) => {
    return String(Number(validTimeEntered));
};

const maxTimeDigits = 6;

export const limitTimeDigits = (timeEntered: string) => {
    const isTimeEnteredTooLong = timeEntered.length > maxTimeDigits;

    if (isTimeEnteredTooLong) {
        return timeEntered.slice(0, maxTimeDigits);
    } else {
        return timeEntered;
    }
};

export const segmentTime = (parsedTime: string) => {
    const zeroPrefixedTime = parsedTime.padStart(maxTimeDigits, '0');

    return segmentString(zeroPrefixedTime, 2);
};