import type { SyntheticEvent } from 'react';
import { useState, useEffect } from 'react';

import { AriaRoles, InputTypes } from '../../types/ariaTypes';
import type { TimeInMilliseconds, TimeInSeconds, FormattedTime } from '../../types/timeTypes';
import { formatTime, getTotalSeconds } from '../../utils/timeConversionUtils';
import { removeCharacter } from '../../utils/stringUtils';
import {
    validateTimeEntered,
    limitTimeDigits,
    segmentTime,
    removeLeadingZeros
} from './clock-display-utils/clockDisplayUtils';

import styles from './ClockDisplay.module.scss';

interface Props {
    disabled: boolean;
    showMilliseconds?: boolean;
    timeInMilliseconds: TimeInMilliseconds;
    setTime?: (time: TimeInSeconds) => void;
}

const ClockDisplay = ({ disabled, showMilliseconds, timeInMilliseconds, setTime }: Props) => {

    const [
        { hours, minutes, seconds, milliseconds },
        updateDisplayTime
    ] = useState<FormattedTime>(formatTime(timeInMilliseconds));

    const refreshDisplayTime = () => {
        updateDisplayTime(formatTime(timeInMilliseconds))
    };

    useEffect(refreshDisplayTime, [timeInMilliseconds])

    const setDisplayTime = ({ target }: SyntheticEvent) => {
        const timeEntered = (target as HTMLInputElement).value;

        const parsableTime = removeCharacter(':', timeEntered);
        const validatedParsableTime = validateTimeEntered(parsableTime);
        const parsedTime = limitTimeDigits(
            removeLeadingZeros(validatedParsableTime)
        );

        const [ hours, minutes, seconds ] = segmentTime(parsedTime);
        updateDisplayTime({ hours, minutes, seconds, milliseconds });
    };

    type TimeUnits = [hours: number, minutes: number, seconds: number];
    const submitDisplayTime = () => {
        if (setTime) {
            const timeUnits: TimeUnits = (
                [hours, minutes, seconds].map(timeUnit => Number(timeUnit)) as TimeUnits
            );
            setTime(getTotalSeconds(...timeUnits));
        }
    };
    return (
        <input
            className={styles.clockDisplay}
            id={clockDisplayID}
            role={AriaRoles.timer}
            type={InputTypes.text}
            disabled={disabled}
            value={
                hours + ':'
                + minutes + ':'
                + seconds
                + (showMilliseconds ? `.${milliseconds}` : '')
            }
            onChange={setDisplayTime}
            onBlur={submitDisplayTime}
        />
    );
};

// For aria-controls
export const clockDisplayID = 'clock-display';
export default ClockDisplay;