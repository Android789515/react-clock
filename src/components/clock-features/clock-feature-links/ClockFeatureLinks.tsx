import { MouseEvent, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import timeClockIcon from './clock-feature-icons/time-clock.svg';
import stopWatchIcon from './clock-feature-icons/stop-watch.svg';
import timerIcon from './clock-feature-icons/timer.svg';
import styles from './ClockFeatureLinks.module.scss';

interface Props {
    isDarkTheme: boolean
}

const ClockFeatureLinks = ({ isDarkTheme }: Props) => {
    const [ routeIcons, updateRouteIcons ] = useState({
        '/': timeClockIcon,
        stopWatch: stopWatchIcon,
        timer: timerIcon
    });

    const setActiveLink = ({ target }: MouseEvent) => {
        const linkIconClicked = (target as HTMLImageElement);
        const linkForIcon = linkIconClicked.alt.split(' ').at(-1)!;

        updateRouteIcons(prevRouteIcons => {
            return {
                [linkForIcon]: linkIconClicked.src,
                ...prevRouteIcons
            };
        });
    };

    const [ isHovered, setIsHovered ] = useState(false);

    const { pathname } = useLocation();
    const Links = Object.entries(routeIcons).map(([route, icon], index) => {
        const isCurrentFeature = pathname === route || pathname === '/' + route;

        return (
            <li
                key={index}
                className={`
                    ${isCurrentFeature ? styles.currentClockFeature : ''}
                    ${styles.clockFeatureLinkWrapper}
                    ${isDarkTheme ? styles.clockFeatureLinkWrapperDark : ''}
                `}
                style={{
                    transform: (
                        isHovered
                        ? 'revert'
                        : `translateX(-${200 * index}%)`
                    )
                }}
            >
                <NavLink
                    to={route}
                    className={`
                    ${isDarkTheme ? styles.clockFeatureLinkDark : ''}
                    ${styles.clockFeatureLink}
                `}
                >
                    <img
                        src={icon}
                        alt={`Link to ${route}`}
                        className={styles.clockFeatureLinkIcon}
                        onClick={setActiveLink}
                    />
                </NavLink>
            </li>
        );
    });

    const routeIconAmount = Object.keys(routeIcons).length;
    return (
        <nav>
            <ul
                className={styles.clockFeatureLinks}
                style={{
                    gridTemplateColumns: `repeat(${routeIconAmount}, 1fr)`
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {Links}
            </ul>
        </nav>
    );
};

export default ClockFeatureLinks;