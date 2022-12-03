import { useContext } from 'react';

import type { TimeInSeconds } from '../../types/timeTypes';
import { alarmScheduler } from '../../alarm-scheduler/alarmScheduler';
import { formatTime, toMilliseconds } from '../../utils/timeConversionUtils';

import styles from './AlarmSetter.module.scss';

import ClockDisplay from '../clock-display/ClockDisplay';

const AlarmSetter = () => {
    const { addAlarm } = useContext(alarmScheduler);

    const createAlarm = (seconds: TimeInSeconds) => {
        const formattedTime = formatTime(toMilliseconds(seconds));

        addAlarm(formattedTime);
    };

    return (
        <label className={styles.alarmSetterLayout}>
            Set alarm for:

            <ClockDisplay
                disabled={false}
                timeInMilliseconds={0}
                customClassname={styles.alarmSetter}
                onSubmit={createAlarm}
            />
        </label>
    );
};

export default AlarmSetter;