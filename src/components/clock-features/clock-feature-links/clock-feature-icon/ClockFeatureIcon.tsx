import { MouseEventHandler } from 'react';

import styles from './ClockFeatureIcon.module.scss';

type URL = string;
type RouteURL = URL;
type iconPath = URL;

interface Props {
    iconPath: iconPath;
    route: RouteURL;
    isDarkTheme?: boolean;
    setActiveLink: MouseEventHandler;
}

const ClockFeatureIcon = ({ iconPath, route, isDarkTheme, setActiveLink }: Props) => {
    return (
        <img
            src={iconPath}
            alt={`Link to ${route}`}
            className={`
                    ${styles.clockFeatureLinkIcon}
                    ${isDarkTheme ? styles.clockFeatureLinkIconDark : ''}
                `}
            onClick={setActiveLink}
        />
    );
};

export default ClockFeatureIcon;