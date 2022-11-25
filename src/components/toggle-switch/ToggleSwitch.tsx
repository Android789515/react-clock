import { useContext, useState } from 'react';

import { themeContext } from '../../theme-context/themeContext';

import styles from './ToggleSwitch.module.scss';

type ToggleOnFunction = () => void;
type ToggleOffFunction = () => void;

const toEms = (number: number) => number + 'em';

interface Props {
    scale: number;
    isInitiallyToggledOn?: boolean;
    whenToggledOn: ToggleOnFunction;
    whenToggledOff: ToggleOffFunction;
}

const ToggleSwitch = ({ scale, isInitiallyToggledOn = false, whenToggledOn, whenToggledOff }: Props) => {
    const { isLightTheme } = useContext(themeContext);

    const switchBackground = isLightTheme()
        ? styles.toggleSwitchLight
        : styles.toggleSwitchDark;

    const [ isToggledOn, setIsToggledOn ] = useState(isInitiallyToggledOn);

    const toggleOn = () => {
        setIsToggledOn(true);
        whenToggledOn();
    };

    const toggleOff = () => {
        setIsToggledOn(false);
        whenToggledOff();
    };

    const toggleSwitch = () => isToggledOn ? toggleOff() : toggleOn();

    const toggleSwitchSize = scale * 3;

    const knobPosition = isToggledOn
        ? toEms(toggleSwitchSize / 2)
        : '0';

    const isToggleSwitchSmall = scale < 2;
    return (
        <button
            className={`
                ${styles.toggleSwitch}
                ${isToggleSwitchSmall ? styles.toggleSwitchSmall : ''}
                ${switchBackground}
            `}
            style={{
                width: toEms(toggleSwitchSize),
                padding: toEms(.25 * scale)
            }}
            onClick={toggleSwitch}
        >
            <span
                className={`
                    ${styles.toggleSwitchKnob}
                    ${knobPosition}
                `}
                style={{
                    marginLeft: knobPosition
                }}
            />
        </button>
    );
};

export default ToggleSwitch;