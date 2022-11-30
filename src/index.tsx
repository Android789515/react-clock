import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import reportWebVitals from './reportWebVitals';

import { ThemeContextProvider } from './theme-context/themeContext';
import { AlarmSchedulerProvider } from './alarm-scheduler/alarmScheduler';
import App from './App';

import TimeClock from './components/clock-features/time-clock/TimeClock';
import StopWatch from './components/clock-features/stop-watch/StopWatch';
import Timer from './components/clock-features/timer/Timer';

import './index.css';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <TimeClock />
            },
            {
                path: '/stopwatch',
                element: <StopWatch />
            },
            {
                path: '/timer',
                element: <Timer />
            }
        ]
    }
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement,
);
root.render(
    <React.StrictMode>
        <ThemeContextProvider>
            <AlarmSchedulerProvider>
                <RouterProvider router={router} />
            </AlarmSchedulerProvider>
        </ThemeContextProvider>
    </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();