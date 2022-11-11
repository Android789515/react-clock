import { useContext } from 'react';

import { themeContext } from '../../theme-context/themeContext';

import styles from './AppHeader.module.scss';

import ClockFeatureLinks from '../clock-features/clock-feature-links/ClockFeatureLinks';
import ToggleSwitch from '../toggle-switch/ToggleSwitch';

const AppHeader = () => {
    const { isDarkTheme, toggleTheme } = useContext(themeContext);

    return (
        <header
            className={styles.appHeader}
        >
            <ClockFeatureLinks />

            <ToggleSwitch
                scale={1}
                isInitiallyToggledOn={isDarkTheme()}
                whenToggledOn={toggleTheme}
                whenToggledOff={toggleTheme}
            />
        </header>
    );
};

export default AppHeader;