import styles from './AlarmSetter.module.scss';

import ClockDisplay from '../clock-display/ClockDisplay';

const AlarmSetter = () => {
    return (
        <label className={styles.alarmSetter}>
            Set alarm for:

            <ClockDisplay
                disabled={false}
                timeInMilliseconds={0}
            />
        </label>
    );
};

export default AlarmSetter;