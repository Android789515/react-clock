import { useContext, useState } from 'react';

import { themeContext } from '../../theme-context/themeContext';

import styles from './ToggleSwitch.module.scss';

type ToggleOnFunction = () => void;
type ToggleOffFunction = () => void;

interface Props {
    isInitiallyToggledOn?: boolean;
    whenToggledOn: ToggleOnFunction;
    whenToggledOff: ToggleOffFunction;
}

const ToggleSwitch = ({ isInitiallyToggledOn = false, whenToggledOn, whenToggledOff }: Props) => {
    const { isLightTheme } = useContext(themeContext);

    const switchBackground = isLightTheme()
        ? styles.themeSwitchLight
        : styles.themeSwitchDark;

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

    const knobPosition = isToggledOn
        ? styles.themeSwitchKnobLeft
        : styles.themeSwitchKnobRight;

    return (
        <button
            className={`
                ${styles.themeSwitch}
                ${switchBackground}
            `}
            onClick={toggleSwitch}
        >
            <span
                className={`
                    ${styles.themeSwitchKnob}
                    ${knobPosition}
                `}
            />
        </button>
    );
};

export default ToggleSwitch;