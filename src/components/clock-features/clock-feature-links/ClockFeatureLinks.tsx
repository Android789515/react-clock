import { NavLink, useLocation } from 'react-router-dom';

import timeClockIcon from './clock-feature-icons/time-clock.svg';
import stopWatchIcon from './clock-feature-icons/stop-watch.svg';
import timerIcon from './clock-feature-icons/timer.svg';
import styles from './ClockFeatureLinks.module.scss';

interface Props {
    isDarkTheme: boolean
}

const ClockFeatureLinks = ({ isDarkTheme }: Props) => {
    const routeMap = new Map([
        ['/', timeClockIcon],
        ['stopwatch', stopWatchIcon],
        ['timer', timerIcon]
    ]);

    const { pathname } = useLocation();
    const Links = [...routeMap.entries()].map(([link, icon], index) => {
        const isCurrentFeature = pathname === '/' + link;

        return (
            <li
                key={index}
                className={`
                ${isCurrentFeature ? styles.currentClockFeature : ''}
                ${styles.clockFeatureLinkWrapper}
            `}
            >
                <NavLink
                    to={link}
                    className={`
                    ${isDarkTheme ? styles.clockFeatureLinkDark : ''}
                    ${styles.clockFeatureLink}
                `}
                >
                    <img
                        src={icon}
                        alt={`Link to ${link}`}
                        className={styles.clockFeatureLinkIcon}
                    />
                </NavLink>
            </li>
        );
    });

    return (
        <nav>
            <ul className={styles.clockFeatureLinks}>
                {Links}
            </ul>
        </nav>
    );
};

export default ClockFeatureLinks;