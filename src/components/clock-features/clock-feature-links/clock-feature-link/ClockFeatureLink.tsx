import { MouseEventHandler } from 'react';
import { NavLink } from 'react-router-dom';

import styles from './ClockFeatureLink.module.scss';

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
            <img
                src={iconPath}
                alt={`Link to ${route}`}
                className={`
                    ${styles.clockFeatureLinkIcon}
                    ${isDarkTheme ? styles.clockFeatureLinkIconDark : ''}
                `}
                onClick={setActiveLink}
            />
        </NavLink>
    );
};

export default ClockFeatureLink;