import { useContext } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { AriaRoles } from './types/ariaTypes';
import { themeContext } from './theme-context/themeContext';

import styles from './App.module.scss';

import AppHeader from './components/app-header/AppHeader';
import TimeClock from './components/clock-features/time-clock/TimeClock';
import StopWatch from './components/clock-features/stop-watch/StopWatch';
import Timer from './components/clock-features/timer/Timer';

const router = createBrowserRouter([
    {
        path: '/',
        element: <TimeClock />
    },
    {
        path: 'stopwatch',
        element: <StopWatch />
    },
    {
        path: 'timer',
        element: <Timer />
    }
]);

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

            <RouterProvider router={router} />
        </div>
    );
};

export default App;