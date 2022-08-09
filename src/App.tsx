import { useContext } from 'react';

import { AriaRoles } from './types/ariaTypes';
import { themeContext } from './theme-context/themeContext';

import styles from './App.module.scss';

import AppHeader from './components/app-header/AppHeader';
import StopWatch from './components/stop-watch/StopWatch';

const App = () => {
    const { getTheme } = useContext(themeContext);

    return (
        <main
            role={AriaRoles.main}
            className={`${styles.app} ${styles[getTheme()]}`}
        >
            <AppHeader />

            <StopWatch />
        </main>
    );
};

export default App;