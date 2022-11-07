import { useContext } from 'react';

import { themeContext } from '../../theme-context/themeContext';

import styles from './ToggleSwitch.module.scss';

type ToggleOnFunction = () => void;
type ToggleOffFunction = () => void;

interface Props {
    whenToggledOn: ToggleOnFunction;
    whenToggledOff: ToggleOffFunction;
}

const ToggleSwitch = ({ whenToggledOn, whenToggledOff }: Props) => {
    const { isLightTheme } = useContext(themeContext);

    const switchBackground = isLightTheme()
        ? styles.themeSwitchLight
        : styles.themeSwitchDark;

    const knobPosition = isLightTheme()
        ? styles.themeSwitchKnobLeft
        : styles.themeSwitchKnobRight;

    return (
        <button
            className={`
                ${styles.themeSwitch}
                ${switchBackground}
            `}
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