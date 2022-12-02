import styles from './AppHeader.module.scss';

import ClockFeatureLinks from '../clock-features/clock-feature-links/ClockFeatureLinks';
import ThemeIcon from '../theme-icon/ThemeIcon';
import ToggleSwitch from '../toggle-switch/ToggleSwitch';

interface Props {
    isDarkTheme: boolean;
    toggleTheme: () => void;
}

const AppHeader = ({ isDarkTheme, toggleTheme }: Props) => {
    return (
        <header
            className={styles.appHeader}
        >
            <ClockFeatureLinks
                isDarkTheme={isDarkTheme}
            />

            <div className={styles.themeArea}>
                <ThemeIcon
                    isDarkTheme={isDarkTheme}
                />

                <ToggleSwitch
                    scale={1}
                    isInitiallyToggledOn={isDarkTheme}
                    whenToggledOn={toggleTheme}
                    whenToggledOff={toggleTheme}
                />
            </div>
        </header>
    );
};

export default AppHeader;