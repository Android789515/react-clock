import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import type { IconPath } from '../../../types/linkTypes';

import timeClockIcon from './icons/time-clock.svg';
import stopWatchIcon from './icons/stop-watch.svg';
import timerIcon from './icons/timer.svg';
import styles from './ClockFeatureLinks.module.scss';

import ClockFeatureLink from './clock-feature-link/ClockFeatureLink';

interface Props {
    isDarkTheme: boolean
}

interface RouteIcons {
    '/': IconPath;
    stopwatch: IconPath;
    timer: IconPath;
}

const ClockFeatureLinks = ({ isDarkTheme }: Props) => {
    const [ routeIcons, updateRouteIcons ] = useState<RouteIcons>({
        '/': timeClockIcon,
        stopwatch: stopWatchIcon,
        timer: timerIcon
    });

    const { pathname } = useLocation();
    const setActiveLink = () => {
        const activeLink = pathname.split('/').at(-1) || '/';
        updateRouteIcons(prevRouteIcons => {
            return {
                [activeLink]: routeIcons[activeLink as keyof RouteIcons],
                ...prevRouteIcons
            };
        });
    };

    useEffect(() => {
        setActiveLink();
    }, [pathname])

    const [ isHovered, setIsHovered ] = useState(false);

    const Links = Object.entries(routeIcons).map(([route, iconPath], index) => {
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
                <ClockFeatureLink
                    route={route}
                    iconPath={iconPath}
                    isDarkTheme={isDarkTheme}
                    isActiveLink={isCurrentFeature}
                />
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
                onFocus={() => setIsHovered(true)}
                onBlur={() => setIsHovered(false)}
            >
                {Links}
            </ul>
        </nav>
    );
};

export default ClockFeatureLinks;