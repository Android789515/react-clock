import { useContext } from 'react';

import { AriaRoles } from './types/AriaRoles';
import { themeContext } from './theme-context/themeContext';

import styles from './App.module.scss';

import StopWatch from './components/stop-watch/StopWatch';

const App = () => {
    const { getTheme } = useContext(themeContext);

    return (
        <main
            role={AriaRoles.main}
            className={`${styles.app} ${styles[getTheme()]}`}
        >
            <StopWatch />
        </main>
    );
};

export default App;