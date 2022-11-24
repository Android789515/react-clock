import { NavLink } from 'react-router-dom';

import type { RouteURL, IconPath } from '../../../../types/linkTypes';

import styles from './ClockFeatureLink.module.scss';

import ClockFeatureIcon from '../clock-feature-icon/ClockFeatureIcon';

interface Props {
    route: RouteURL;
    iconPath: IconPath;
    isDarkTheme?: boolean;
    isActiveLink?: boolean;
}

const ClockFeatureLink = ({ route, iconPath, isDarkTheme, isActiveLink }: Props) => {
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
            />
        </NavLink>
    );
};

export default ClockFeatureLink;