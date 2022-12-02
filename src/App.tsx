import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { AriaRoles } from './types/ariaTypes';
import { themeContext } from './theme-context/themeContext';

import styles from './App.module.scss';

import AppHeader from './components/app-header/AppHeader';

const App = () => {
    const { isDarkTheme, toggleTheme } = useContext(themeContext);

    return (
        <div
            role={AriaRoles.application}
            className={`
                ${styles.app}
                ${isDarkTheme() ? styles.darkTheme : styles.lightTheme}
            `}
        >
            <AppHeader
                isDarkTheme={isDarkTheme()}
                toggleTheme={toggleTheme}
            />

            <Outlet />
        </div>
    );
};

export default App;