import { useContext } from 'react';

import { themeContext } from '../../theme-context/themeContext';

import styles from './ThemeSwitch.module.scss';

const ThemeSwitch = () => {
    const { isLightTheme, toggleTheme } = useContext(themeContext);

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
            onClick={toggleTheme}
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

export default ThemeSwitch;