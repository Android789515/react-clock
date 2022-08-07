import { useContext } from 'react';

import { clockDisplayID } from '../../clock-display/ClockDisplay';
import { themeContext } from '../../../theme-context/themeContext';

import styles from './StopWatchButtons.module.scss';

import ActionButton from '../../action-button/ActionButton';

type ClockAction = () => void;
interface Props {
    startClock: ClockAction;
    stopClock: ClockAction;
    resetClock: ClockAction;
}

const StopWatchButtons = ({ startClock, stopClock, resetClock }: Props) => {
    const { getTheme } = useContext(themeContext);

    return (
        <div
            title='Stop Watch Buttons'
            className={`${styles.stopWatchButtons} ${styles[getTheme()]}`}
            role='toolbar'
        >
            <ActionButton
                actionName='Start'
                ariaControls={clockDisplayID}
                onClick={startClock}
            />

            <ActionButton
                actionName='Stop'
                ariaControls={clockDisplayID}
                onClick={stopClock}
            />

            <ActionButton
                actionName='Reset'
                ariaControls={clockDisplayID}
                onClick={resetClock}
            />
        </div>
    );
};

export default StopWatchButtons;