import { useContext, useEffect, useRef } from 'react';

import type { TimeInSeconds } from '../../../../types/timeTypes';
import { AriaRoles } from '../../../../types/ariaTypes';
import { Colors } from '../../../../types/Colors';
import { themeContext } from '../../../../theme-context/themeContext';

import styles from './TimerProgressBar.module.scss';

import SVGGradientProvider from '../../../svg-gradient-provider/SVGGradientProvider';
import TimerProgressBarBackground from './timer-progress-bar-background/TimerProgressBarBackground';

interface Props {
    isActive: boolean;
    currentTimeInSeconds: TimeInSeconds;
    totalTimeInSeconds: TimeInSeconds;
}

const TimerProgressBar = ({ isActive, currentTimeInSeconds, totalTimeInSeconds }: Props) => {

    const timerBarRef = useRef<SVGCircleElement>(null);

    const setProgress = () => {
        const timerBar = timerBarRef.current;

        const isTimerBarMounted = timerBar !== null;
        if (isTimerBarMounted) {
            const timerBarCircumference = timerBar && timerBar.r?.baseVal.value * 2 * Math.PI;

            timerBar.style.strokeDasharray = `${timerBarCircumference} ${timerBarCircumference}`;

            const percent = (currentTimeInSeconds / totalTimeInSeconds) * 100;
            const progressOffset = timerBarCircumference - percent / 100 * timerBarCircumference;
            timerBar.style.strokeDashoffset = String(progressOffset);
        }
    };

    useEffect(setProgress, [currentTimeInSeconds]);

    const timeBarVisibility = isActive ? styles.showTimerBar : '';

    const { isLightTheme } = useContext(themeContext);

    enum BarColors {
        lightBlue = '#00aaf5',
        lightGreen = '#00d257'
    }

    // The radius property must be set in the markup
    // otherwise it cannot be grabbed when accessing
    // SVG element
    return (
        <svg
            className={`
                ${styles.timerBarLayout}
                ${timeBarVisibility}
            `}
            aria-label={timerProgressBarLabel}
        >
            <TimerProgressBarBackground isLightTheme={isLightTheme()} />

            <SVGGradientProvider
                linear
                gradientUnits={{
                    x1: '0%',
                    x2: '0%',
                    y1: '0%',
                    y2: '100%'
                }}
                stops={[
                    <stop offset='0%' stopColor={BarColors.lightBlue} />,
                    <stop offset='100%' stopColor={BarColors.lightGreen} />
                ]}
                renderWithGradient={gradientColor => (
                    <circle
                        role={AriaRoles.progressbar}
                        className={styles.timerBar}
                        stroke={isLightTheme() ? gradientColor : Colors.white}
                        ref={timerBarRef}
                        r='14em'
                    />
                )}
            />
        </svg>
    );
};

export const timerProgressBarLabel = 'timer-progress-bar';
export default TimerProgressBar;