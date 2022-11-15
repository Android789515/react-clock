import type { IconPath, RouteURL } from '../../../../types/linkTypes';

import styles from './ClockFeatureIcon.module.scss';

interface Props {
    iconPath: IconPath;
    route: RouteURL;
    isDarkTheme?: boolean;
}

const ClockFeatureIcon = ({ iconPath, route, isDarkTheme }: Props) => {
    return (
        <img
            src={iconPath}
            alt={`Link to ${route}`}
            className={`
                ${styles.clockFeatureLinkIcon}
                ${isDarkTheme ? styles.clockFeatureLinkIconDark : ''}
            `}
        />
    );
};

export default ClockFeatureIcon;