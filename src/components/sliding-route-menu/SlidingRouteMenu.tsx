import type { ReactNode } from 'react';

import type { CSS_Class } from '../../types/CSS_Types';

import styles from './SlidingRouteMenu.module.scss';

interface Props {
    routes: [];
    LinkComponent: ReactNode;
    customClassName?: CSS_Class;
}

const SlidingRouteMenu = ({ routes, LinkComponent, customClassName }: Props) => {
    return (
        <ul
            className={`
                ${customClassName}
                ${styles.slidingRouteMenu}
            `}
        >

        </ul>
    );
};

export default SlidingRouteMenu;