import { ChangeEvent, Dispatch, SetStateAction, useEffect, useRef, useState } from 'react';

import type { TimeInSeconds } from '../../../types/timeTypes';
import { InputTypes } from '../../../types/ariaTypes';
import { insertCharacter, prefix, removeCharacter } from '../../../utils/stringUtils';

import styles from './EditableClockDisplayOverlay.module.scss';

import ClockDisplay from '../../clock-display/ClockDisplay';

interface Props {
    disabled: boolean;
    timeInSeconds: TimeInSeconds;
    updateTimeInSeconds: Dispatch<SetStateAction<TimeInSeconds>>;
}

const EditableClockDisplayOverlay = ({ disabled, timeInSeconds, updateTimeInSeconds }: Props) => {
    const [ isEditing, setIsEditing ] = useState(false);

    const disableEditing = () => setIsEditing(false);
    // Disables editing when the timer time is saved/updated.
    useEffect(disableEditing, [timeInSeconds]);

    const editableOverlayRef = useRef<HTMLInputElement>(null);
    const focusOnEdit = () => {
        const isMounted = editableOverlayRef.current;

        if (isEditing && isMounted) {
            const editableOverlay = editableOverlayRef.current;
            editableOverlay.focus();
        }
    };
    useEffect(focusOnEdit, [isEditing]);

    const [ overlayTime, updateOverlayTime ] = useState(timeInSeconds);
    const maxOverlayTimeLength = 6;

    const setOverlayTime = ({ target }: ChangeEvent) => {
        // Remove the colons from the updated overlay time.
        const editableOverlayTime = removeCharacter(':', (target as HTMLInputElement).value);
        // Automatically removes leading zeros.
        const newOverlayTime = Number(editableOverlayTime);

        updateOverlayTime(prevTime => {
            const isNewTimeTooLong = String(newOverlayTime).length > maxOverlayTimeLength;

            if (!isNewTimeTooLong) {
                return newOverlayTime;
            } else {
                return prevTime;
            }
        });
    };

    const insertColonsInOverlayTime = () => {
        const modifiableOverlayTime = String(overlayTime);

        const untilMaxOverlayTimeLength = maxOverlayTimeLength - modifiableOverlayTime.length;
        const overlayTimeWithColons = insertCharacter(
            ':',
            prefix(modifiableOverlayTime, '0', untilMaxOverlayTimeLength),
            2
        );

        return overlayTimeWithColons;
    };

    // Updates the Timer's time.
    const setTimerTime = () => {
        const easilySectionableOverlayTime = insertColonsInOverlayTime();

        const [ hours, minutes, seconds ] = easilySectionableOverlayTime.split(':').map(section => Number(section));

        const fullTimeInSeconds = (hours * 3600) + (minutes * 60) + seconds;

        updateTimeInSeconds(fullTimeInSeconds);
    };

    const enableEditing = () => setIsEditing(true);
    return (
        <div
            className={styles.editableClockDisplayOverlayLayout}
            onClick={enableEditing}
        >
            {
                !disabled && isEditing
                ? <input
                    className={styles.editableClockDisplayOverlay}
                    value={insertColonsInOverlayTime()}
                    type={InputTypes.text}
                    ref={editableOverlayRef}
                    onChange={setOverlayTime}
                    onBlur={setTimerTime}
                  />
                : <ClockDisplay
                    timeInMilliseconds={timeInSeconds * 1000}
                  />
            }
        </div>
    );
};

export default EditableClockDisplayOverlay;