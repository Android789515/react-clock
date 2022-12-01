import { isNumber, segmentString } from '../../../utils/stringUtils';

export const wasValidTimeEntered = (timeEntered: string) => {
    const lastCharacterEntered = timeEntered.at(-1)!;

    return isNumber(lastCharacterEntered);
};

const maxTimeDigits = 6;

export const segmentTime = (parsedTime: string) => {
    const zeroPrefixedTime = parsedTime.padStart(maxTimeDigits, '0');

    return segmentString(zeroPrefixedTime, 2);
};

export const shiftTimeLeft = (timeEntered: string) => {
    const firstDigitInTime = Number(timeEntered.at(0));
    const canShiftTime = firstDigitInTime === 0;

    if (canShiftTime) {
        const shiftedTime = timeEntered.slice(1);
        return segmentTime(shiftedTime);
    } else {
        return segmentTime(timeEntered);
    }
};