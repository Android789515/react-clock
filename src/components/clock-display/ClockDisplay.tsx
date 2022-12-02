import type { SyntheticEvent, KeyboardEvent } from 'react';
import { useEffect, useState } from 'react';

import type { FormattedTime, TimeInMilliseconds, TimeInSeconds } from '../../types/timeTypes';
import type { CSS_Class } from '../../types/CSS_Types';
import { AriaRoles, InputTypes } from '../../types/ariaTypes';
import { formatTime, getTotalSeconds, stringifyTime } from '../../utils/timeConversionUtils';
import { removeCharacter } from '../../utils/stringUtils';
import { shiftTimeLeft, wasValidTimeEntered } from './clock-display-utils/clockDisplayUtils';

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
        if (wasValidTimeEntered(timeEntered)) {
            const parsedTime = removeCharacter(':', timeEntered);

            const [ hours, minutes, seconds ] = shiftTimeLeft(parsedTime);
            updateDisplayTime(prevTime => {
                // Milliseconds are not editable by the user.
                return { hours, minutes, seconds, milliseconds: prevTime.milliseconds };
            });
        }
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

    const submitDisplayTimeOnEnter = ({ key }: KeyboardEvent) => {
        if (key === 'Enter') {
            submitDisplayTime();
        }
    };

    return (
        <input
            className={`
                ${styles.clockDisplay}
                ${customClassname}
            `}
            id={clockDisplayID}
            role={disabled ? AriaRoles.timer : AriaRoles.textInput}
            type={InputTypes.text}
            disabled={disabled}
            value={stringifyTime(displayTime, showMilliseconds || false)}
            onChange={setDisplayTime}
            onBlur={submitDisplayTime}
            onKeyDown={submitDisplayTimeOnEnter}
        />
    );
};

// For aria-controls
export const clockDisplayID = 'clock-display';
export default ClockDisplay;