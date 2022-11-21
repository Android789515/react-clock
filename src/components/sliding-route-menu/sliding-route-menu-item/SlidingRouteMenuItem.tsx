import type { ReactNode } from 'react';

import type { CSS_Class } from '../../../types/CSS_Types';

import styles from './SlidingRouteMenuItem.module.scss';

interface Props {
    customClassName?: CSS_Class
    children: ReactNode
}

const SlidingRouteMenuItem = ({ customClassName, children }: Props) => {
    return (
        <li
            className={`
                ${customClassName}
                ${styles.slidingRouteMenuItem}
            `}
        >
            {children}
        </li>
    );
};

export default SlidingRouteMenuItem;