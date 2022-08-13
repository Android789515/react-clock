import { AriaRoles } from '../../../types/ariaTypes';

import { clockDisplayID } from '../../clock-display/ClockDisplay';

import styles from './TimerButtons.module.scss';

import ActionButton from '../../action-button/ActionButton';

type TimerAction = () => void;
interface Props {
    startTimer: TimerAction;
    stopTimer: TimerAction;
    resetTimer: TimerAction;
}

const TimerButtons = ({ startTimer, stopTimer, resetTimer }: Props) => {
    return (
        <div
            role={AriaRoles.toolbar}
            className={styles.timerButtons}
        >
            <ActionButton
                actionName='Start'
                ariaControls={clockDisplayID}
                onClick={startTimer}
            />

            <ActionButton
                actionName='Stop'
                ariaControls={clockDisplayID}
                onClick={stopTimer}
            />

            <ActionButton
                actionName='Reset'
                ariaControls={clockDisplayID}
                onClick={resetTimer}
            />
        </div>
    );
}

export default TimerButtons;