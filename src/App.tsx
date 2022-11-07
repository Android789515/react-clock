import { useContext } from 'react';

import { AriaRoles } from './types/ariaTypes';
import { themeContext } from './theme-context/themeContext';

import styles from './App.module.scss';

import AppHeader from './components/app-header/AppHeader';
import TimeClock from './components/clock-features/time-clock/TimeClock';

const App = () => {
    const { isLightTheme } = useContext(themeContext);

    return (
        <div
            role={AriaRoles.application}
            className={`
                ${styles.app}
                ${isLightTheme() ? styles.lightTheme : styles.darkTheme}
            `}
        >
            <AppHeader />

            <TimeClock />
        </div>
    );
};

export default App;