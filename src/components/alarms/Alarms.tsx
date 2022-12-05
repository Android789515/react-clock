import { useContext } from 'react';

import { alarmScheduler } from '../../alarm-scheduler/alarmScheduler';

import styles from './Alarms.module.scss';

import Alarm from './alarm/Alarm';

const Alarms = () => {
    const { getAlarms } = useContext(alarmScheduler);

    const Alarms = getAlarms().map((alarm, index) => {
        return (
            <Alarm
                key={index}
            />
        );
    });

    return (
        <ul className={styles.alarms}>
            {Alarms}
        </ul>
    );
};

export default Alarms;