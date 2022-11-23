import type { ReactNode, CSSProperties } from 'react';

import type { CSS_Class } from '../../../types/CSS_Types';

import styles from './SlidingRouteMenuItem.module.scss';

interface Props {
    isActiveRoute: boolean;
    customClassName?: CSS_Class
    customStyle: CSSProperties;
    children: ReactNode
}

const SlidingRouteMenuItem = ({ isActiveRoute, customClassName, customStyle, children }: Props) => {
    return (
        <li
            className={`
                ${customClassName}
                ${styles.slidingRouteMenuItem}
                ${isActiveRoute ? styles.activeSlidingRouteMenuItem : ''}
            `}
            style={customStyle}
        >
            {children}
        </li>
    );
};

export default SlidingRouteMenuItem;