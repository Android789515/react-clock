import { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ClockFeatureLink.module.scss';

import ClockFeatureIcon from '../clock-feature-icon/ClockFeatureIcon';

type URL = string;
type RouteURL = URL;
type iconPath = URL;

interface Props {
    route: RouteURL;
    iconPath: iconPath;
    isDarkTheme?: boolean;
    isActiveLink?: boolean;
    setActiveLink: MouseEventHandler;
}

const ClockFeatureLink = ({ route, iconPath, isDarkTheme, isActiveLink, setActiveLink }: Props) => {
    return (
        <NavLink
            to={route}
            className={`
                    ${styles.clockFeatureLink}
                    ${isActiveLink ? styles.activeClockFeatureLink : ''}
                `}
        >
            <ClockFeatureIcon
                iconPath={iconPath}
                route={route}
                isDarkTheme={isDarkTheme}
                setActiveLink={setActiveLink}
            />
        </NavLink>
    );
};

export default ClockFeatureLink;