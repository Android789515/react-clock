import { ChangeEvent } from 'react';

import { AriaRoles, InputTypes } from '../../types/ariaTypes';
import type { TimeInMilliseconds, TimeInSeconds } from '../../types/timeTypes';
import { formatTime, getTotalSeconds } from '../../utils/timeConversionUtils';
import { prefix, removeCharacter, segmentString } from '../../utils/stringUtils';

import styles from './ClockDisplay.module.scss';

interface Props {
    disabled: boolean;
    showMilliseconds?: boolean;
    timeInMilliseconds: TimeInMilliseconds;
    setTime?: (time: TimeInSeconds) => void;
}

const ClockDisplay = ({ disabled, showMilliseconds, timeInMilliseconds, setTime }: Props) => {

    const maxTimeDigits = 6;

    const limitTimeDigits = (timeEntered: string) => {
        const isTimeEnteredTooLong = timeEntered.length > maxTimeDigits;

        if (isTimeEnteredTooLong) {
            return timeEntered.slice(0, maxTimeDigits);
        } else {
            return timeEntered;
        }
    };

    const segmentTime = (parsedTime: string) => {
        const zeroPrefixedTime = prefix(parsedTime, '0', maxTimeDigits - parsedTime.length);

        return segmentString(zeroPrefixedTime, 2);
    };

    const validateTimeEntered = (timeEntered: string) => {
        const isTimeEnteredValidNumber = !Object.is(Number(timeEntered), NaN);

        if (isTimeEnteredValidNumber) {
            return timeEntered;
        } else {
            const previousValidTime = timeEntered.slice(0, timeEntered.length - 1);
            return previousValidTime;
        }
    };

    const removeLeadingZeros = (validTimeEntered: string) => {
        return String(Number(validTimeEntered));
    };

    const setDisplayTime = ({ target }: ChangeEvent) => {
        const timeEntered = (target as HTMLInputElement).value;

        const parsableTime = removeCharacter(':', timeEntered);
        const validatedParsableTime = validateTimeEntered(parsableTime);
        const parsedTime = limitTimeDigits(
            removeLeadingZeros(validatedParsableTime)
        );

        const timeSegments = segmentTime(parsedTime).map(segment => Number(segment));
        const [ hours, minutes, seconds ] = timeSegments;

        const totalSeconds = getTotalSeconds(hours, minutes, seconds);

        if (setTime) {
            setTime(totalSeconds);
        }
    };

    const {
        formattedHours,
        formattedMinutes,
        formattedSeconds,
        formattedMilliseconds
    } = formatTime(timeInMilliseconds);
    return (
        <input
            className={styles.clockDisplay}
            id={clockDisplayID}
            role={AriaRoles.timer}
            type={InputTypes.text}
            disabled={disabled}
            value={
                formattedHours + ':'
                + formattedMinutes + ':'
                + formattedSeconds
                + (showMilliseconds ? `.${formattedMilliseconds}` : '')
            }
            onChange={setDisplayTime}
        />
    );
};

// For aria-controls
export const clockDisplayID = 'clock-display';
export default ClockDisplay;