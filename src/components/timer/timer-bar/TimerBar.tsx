import { useContext, useState, useEffect, useRef } from 'react';

import type { TimeInSeconds } from '../../../types/timeTypes';
import { Colors } from '../../../types/Colors';
import { AriaRoles } from '../../../types/ariaTypes';
import { themeContext } from '../../../theme-context/themeContext';

import styles from './TimerBar.module.scss';

interface Props {
    isActive: boolean;
    currentTimeInSeconds: TimeInSeconds;
}

const TimerBar = ({ isActive, currentTimeInSeconds }: Props) => {
    const [ totalTimeInSeconds ] = useState(currentTimeInSeconds);

    const timerBarRadius = '14em';
    const timerBarRef = useRef(null);

    const setProgress = () => {
        const timerBar = timerBarRef.current! as SVGCircleElement;
        const timerBarCircumference = timerBar && timerBar.r.baseVal.value * 2 * Math.PI;

        timerBar.style.strokeDasharray = `${timerBarCircumference} ${timerBarCircumference}`;

        const percent = (currentTimeInSeconds / totalTimeInSeconds) * 100;
        const progressOffset = timerBarCircumference - percent / 100 * timerBarCircumference;
        timerBar.style.strokeDashoffset = String(progressOffset);
    };

    useEffect(setProgress, [currentTimeInSeconds]);

    const timerBarOffset = '15em';
    const timerBarWidth = '2em';
    const barGradient = 'bar-gradient';

    enum BarColors {
        lightBlue = '#00aaf5',
        lightGreen = '#00d257'
    }

    const { isLightTheme } = useContext(themeContext);
    const barBackgroundColor = isLightTheme() ? Colors.gray : Colors.black;
    const barColor = isLightTheme() ? `url(#${barGradient})` : Colors.white;

    const timeBarVisibility = isActive ? styles.showTimerBar : '';
    return (
        <svg
            className={`${styles.timerBarArea} ${timeBarVisibility}`}
        >
            <linearGradient
                id={barGradient}
                x1='0%'
                x2='0%'
                y1='0%'
                y2='100%'
            >
                <stop offset='0%' stopColor={BarColors.lightBlue} />
                <stop offset='100%' stopColor={BarColors.lightGreen} />
            </linearGradient>
            <circle
                stroke={barBackgroundColor}
                strokeWidth={timerBarWidth}
                fill='transparent'
                r={timerBarRadius}
                cx={timerBarOffset}
                cy={timerBarOffset}
            />
            <circle
                role={AriaRoles.progressbar}
                className={styles.timerBar}
                stroke={barColor}
                strokeWidth={timerBarWidth}
                strokeLinecap='round'
                fill='transparent'
                r={timerBarRadius}
                cx={timerBarOffset}
                cy={timerBarOffset}
                ref={timerBarRef}
            />
        </svg>
    );
};

export default TimerBar;