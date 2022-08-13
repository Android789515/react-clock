import { useContext } from 'react';

import { AriaRoles } from '../../types/ariaTypes';
import { clockDisplayID } from '../clock-display/ClockDisplay';
import { themeContext } from '../../theme-context/themeContext';

import styles from './ClockActionButtons.module.scss';

import ActionButton from '../action-button/ActionButton';

type StopWatchAction = () => void;

interface Props {
    isClockStarted?: boolean;
    startCounting: StopWatchAction;
    stopCounting: StopWatchAction;
    resetTime: StopWatchAction;
}

const ClockActionButtons = ({ isClockStarted, startCounting, stopCounting, resetTime }: Props) => {
    const { getTheme } = useContext(themeContext);

    return (
        <div
            title='Stop Watch Buttons'
            className={`
                ${styles.clockActionButtons}
                ${styles[getTheme()]}
            `}
            role={AriaRoles.toolbar}
        >
            {isClockStarted
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

export default ClockActionButtons;