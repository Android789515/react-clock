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
            title={stopWatchComponentTitle}
            className={`${styles.stopWatchButtons} ${styles[getTheme()]}`}
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

// Title is exported so this component can be
// retrieved during testing
export const stopWatchComponentTitle = 'Stop Watch Buttons';
export default StopWatchButtons;