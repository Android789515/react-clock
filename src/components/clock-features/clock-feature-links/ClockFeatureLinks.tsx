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
    const [ routes, updateRoutes ] = useState({
        '/': timeClockIcon,
        stopWatch: stopWatchIcon,
        timer: timerIcon
    });

    const setActiveLink = ({ target }: MouseEvent) => {
        const linkIconClicked = (target as HTMLImageElement);
        const linkForIcon = linkIconClicked.alt.split(' ').at(-1)!;

        updateRoutes(prevRoutes => {
            return {
                [linkForIcon]: linkIconClicked.src,
                ...prevRoutes
            };
        });
    };

    const [ isHovered, setIsHovered ] = useState(false);

    const { pathname } = useLocation();
    const Links = Object.entries(routes).map(([link, icon], index) => {
        const isCurrentFeature = pathname === link || pathname === '/' + link;

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
                        onClick={setActiveLink}
                    />
                </NavLink>
            </li>
        );
    });

    const numberOfFeatureLinks = Object.keys(routes).length;
    return (
        <nav>
            <ul
                className={styles.clockFeatureLinks}
                style={{
                    gridTemplateColumns: `repeat(${numberOfFeatureLinks}, 1fr)`
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