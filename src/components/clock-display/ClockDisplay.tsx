import { ChangeEvent } from 'react';

import { AriaRoles, InputTypes } from '../../types/ariaTypes';
import type { TimeInMilliseconds, TimeInSeconds } from '../../types/timeTypes';
import { removeCharacter } from '../../utils/stringUtils';
import { formatTime } from '../../utils/timeConversionUtils';

import styles from './ClockDisplay.module.scss';

interface Props {
    disabled: boolean;
    showMilliseconds?: boolean;
    timeInMilliseconds: TimeInMilliseconds;
    setTime?: (time: TimeInMilliseconds | TimeInSeconds) => void;
}

const ClockDisplay = ({ disabled, showMilliseconds, timeInMilliseconds, setTime }: Props) => {
    const maxDisplayTimeLength = 6;

    const setDisplayTime = ({ target }: ChangeEvent) => {
        // Remove the colons from the updated display time.
        const displayTime = removeCharacter(':', (target as HTMLInputElement).value);
        // Automatically remove leading zeros.
        const newTime = Number(displayTime);

        const wasTimeSetterDefined = setTime !== undefined;
        if (wasTimeSetterDefined) {
            const isNewTimeTooLong = String(newTime).length > maxDisplayTimeLength;
            const isNewTimeValidNumber = !Object.is(newTime, NaN);

            if (!isNewTimeTooLong && isNewTimeValidNumber) {
                setTime(newTime);
            }
        }
    };

    const { hours, minutes, seconds, milliseconds } = formatTime(timeInMilliseconds);
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
                + (showMilliseconds ? '.' + milliseconds : '')
            }
            onChange={setDisplayTime}
        />
    );
};

// For aria-controls
export const clockDisplayID = 'clock-display';
export default ClockDisplay;