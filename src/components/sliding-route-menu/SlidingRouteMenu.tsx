import type { ReactNode } from 'react';

import type { CSS_Class } from '../../types/CSS_Types';

import styles from './SlidingRouteMenu.module.scss';

interface Props {
    menuItems: [];
    itemComponent: ReactNode;
    customClassName?: CSS_Class;
}

const SlidingRouteMenu = ({ menuItems, itemComponent, customClassName }: Props) => {
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