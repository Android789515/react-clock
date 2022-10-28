import { useContext } from 'react';

import { AriaRoles } from './types/ariaTypes';
import { themeContext } from './theme-context/themeContext';

import styles from './App.module.scss';

import AppHeader from './components/app-header/AppHeader';
import StopWatch from './components/stop-watch/StopWatch';

const App = () => {
    const { isLightTheme } = useContext(themeContext);

    return (
        <main
            role={AriaRoles.main}
            className={`
                ${styles.app}
                ${isLightTheme() ? styles.lightTheme : styles.darkTheme}
            `}
        >
            <AppHeader />

            <StopWatch />
        </main>
    );
};

export default App;