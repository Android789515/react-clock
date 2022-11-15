import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import useGetRouteIcons from './useGetRouteIcons';

import styles from './ClockFeatureLinks.module.scss';

import ClockFeatureLink from './clock-feature-link/ClockFeatureLink';

interface Props {
    isDarkTheme: boolean
}

const ClockFeatureLinks = ({ isDarkTheme }: Props) => {
    const { pathname } = useLocation();

    const { getRouteIcons, getRouteIconAmount, setActiveLink } = useGetRouteIcons(pathname);

    useEffect(() => {
        setActiveLink();
    }, [pathname])

    const [ isHovered, setIsHovered ] = useState(false);

    const Links = Object.entries(getRouteIcons()).map(([route, iconPath], index) => {
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

    return (
        <nav>
            <ul
                className={styles.clockFeatureLinks}
                style={{
                    gridTemplateColumns: `repeat(${getRouteIconAmount()}, 1fr)`
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