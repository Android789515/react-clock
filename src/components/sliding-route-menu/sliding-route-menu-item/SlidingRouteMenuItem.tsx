import type { ReactNode } from 'react';

import type { CSS_Class } from '../../../types/CSS_Types';

import styles from './SlidingRouteMenuItem.module.scss';

interface Props {
    isActiveRoute: boolean;
    customClassName?: CSS_Class
    children: ReactNode
}

const SlidingRouteMenuItem = ({ isActiveRoute, customClassName, children }: Props) => {
    return (
        <li
            className={`
                ${customClassName}
                ${styles.slidingRouteMenuItem}
                ${isActiveRoute ? styles.activeSlidingRouteMenuItem : ''}
            `}
        >
            {children}
        </li>
    );
};

export default SlidingRouteMenuItem;