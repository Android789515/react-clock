import type { ReactNode, CSSProperties } from 'react';
import { useContext } from 'react';

import type { CSS_Class } from '../../../types/CSS_Types';
import { themeContext } from '../../../theme-context/themeContext';

import styles from './SlidingRouteMenuItem.module.scss';

interface Props {
    isActiveRoute: boolean;
    customClassName?: CSS_Class
    customStyle: CSSProperties;
    children: ReactNode
}

const SlidingRouteMenuItem = ({ isActiveRoute, customClassName, customStyle, children }: Props) => {
    const { isDarkTheme } = useContext(themeContext);

    return (
        <li
            className={`
                ${customClassName}
                ${styles.slidingRouteMenuItem}
                ${isDarkTheme() ? styles.activeSlidingRouteMenuItemDark : ''}
                ${isActiveRoute ? styles.activeSlidingRouteMenuItem : ''}
            `}
            style={customStyle}
        >
            {children}
        </li>
    );
};

export default SlidingRouteMenuItem;