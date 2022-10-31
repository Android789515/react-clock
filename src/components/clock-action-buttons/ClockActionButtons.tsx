import { useContext } from 'react';
import { v4 as generateUUID } from 'uuid';

import { AriaRoles } from '../../types/ariaTypes';
import { clockDisplayID } from '../clock-display/ClockDisplay';
import { themeContext } from '../../theme-context/themeContext';

import styles from './ClockActionButtons.module.scss';

import ActionButton from '../action-button/ActionButton';

type WatchAction = () => void;
type ActionName = string;

interface ActionButtonProp {
    name: ActionName;
    action: WatchAction;
}

interface Props {
    actions: ActionButtonProp[]
}

const ClockActionButtons = ({ actions }: Props) => {
    const { isLightTheme } = useContext(themeContext);

    return (
        <div
            title='Stop Watch Buttons'
            className={`
                ${styles.clockActionButtons}
                ${isLightTheme() ? styles.clockActionButtonsLight : styles.clockActionButtonsDark}
            `}
            role={AriaRoles.toolbar}
        >
            {actions.map(({ name, action }, index) => (
                <ActionButton
                    key={index}
                    actionName={name}
                    ariaControls={clockDisplayID}
                    onClick={action}
                />
            ))}
        </div>
    );
};

export default ClockActionButtons;