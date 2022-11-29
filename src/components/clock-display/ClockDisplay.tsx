import type { SyntheticEvent } from 'react';
import { useState, useEffect } from 'react';

import type { TimeInMilliseconds, TimeInSeconds, FormattedTime } from '../../types/timeTypes';
import type { CSS_Class } from '../../types/CSS_Types';
import { AriaRoles, InputTypes } from '../../types/ariaTypes';
import { formatTime, getTotalSeconds, stringifyTime } from '../../utils/timeConversionUtils';
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
    customClassname?: CSS_Class;
    setTime?: (time: TimeInSeconds) => void;
}

const ClockDisplay = ({ disabled, showMilliseconds, timeInMilliseconds, customClassname, setTime }: Props) => {

    const [ displayTime, updateDisplayTime ] = useState<FormattedTime>(formatTime(timeInMilliseconds));

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
        updateDisplayTime(prevTime => {
            // Milliseconds are not editable by the user.
            return { hours, minutes, seconds, milliseconds: prevTime.milliseconds };
        });
    };

    const submitDisplayTime = () => {
        if (setTime) {
            const [ hours, minutes, seconds ] = (
                Object.values(displayTime).map(timeUnit => Number(timeUnit))
            );
            // Milliseconds are not editable by the user, so excluded.
            setTime(getTotalSeconds(hours, minutes, seconds));
        }
    };
    return (
        <input
            className={`
                ${styles.clockDisplay}
                ${customClassname}
            `}
            id={clockDisplayID}
            role={AriaRoles.timer}
            type={InputTypes.text}
            disabled={disabled}
            value={stringifyTime(displayTime, showMilliseconds || false)}
            onChange={setDisplayTime}
            onBlur={submitDisplayTime}
        />
    );
};

// For aria-controls
export const clockDisplayID = 'clock-display';
export default ClockDisplay;