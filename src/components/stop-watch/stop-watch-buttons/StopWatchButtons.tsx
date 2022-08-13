import { useContext } from 'react';

import { AriaRoles } from '../../../types/ariaTypes';
import { clockDisplayID } from '../../clock-display/ClockDisplay';
import { themeContext } from '../../../theme-context/themeContext';

import styles from './StopWatchButtons.module.scss';

import ActionButton from '../../action-button/ActionButton';

type ClockAction = () => void;

interface Props {
    isStopWatchStarted: boolean;
    startCounting: ClockAction;
    stopCounting: ClockAction;
    resetTime: ClockAction;
}

const StopWatchButtons = ({ isStopWatchStarted, startCounting, stopCounting, resetTime }: Props) => {
    const { getTheme } = useContext(themeContext);

    return (
        <div
            title='Stop Watch Buttons'
            className={`
                ${styles.stopWatchButtons}
                ${styles[getTheme()]}
            `}
            role={AriaRoles.toolbar}
        >
            {isStopWatchStarted
                ? (
                    <ActionButton
                        actionName='Lap'
                        ariaControls={clockDisplayID}
                        onClick={() => {}}
                    />
                )
                : (
                    <ActionButton
                        actionName='Start'
                        ariaControls={clockDisplayID}
                        onClick={startCounting}
                    />
                )
            }

            <ActionButton
                actionName='Stop'
                ariaControls={clockDisplayID}
                onClick={stopCounting}
            />

            <ActionButton
                actionName='Reset'
                ariaControls={clockDisplayID}
                onClick={resetTime}
            />
        </div>
    );
};

export default StopWatchButtons;