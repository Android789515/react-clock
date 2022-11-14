import { MouseEvent, useState } from 'react';
import { useLocation } from 'react-router-dom';

import timeClockIcon from './clock-feature-icons/time-clock.svg';
import stopWatchIcon from './clock-feature-icons/stop-watch.svg';
import timerIcon from './clock-feature-icons/timer.svg';
import styles from './ClockFeatureLinks.module.scss';

import ClockFeatureLink from './clock-feature-link/ClockFeatureLink';

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
                    setActiveLink={setActiveLink}
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
            >
                {Links}
            </ul>
        </nav>
    );
};

export default ClockFeatureLinks;