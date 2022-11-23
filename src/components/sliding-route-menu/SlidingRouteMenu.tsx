import type { ReactNode } from 'react';
import { useState } from 'react';

import type { RouteURL } from '../../types/linkTypes';
import type { CSS_Class } from '../../types/CSS_Types';

import styles from './SlidingRouteMenu.module.scss';

import SlidingRouteMenuItem from './sliding-route-menu-item/SlidingRouteMenuItem';

interface Props {
    routes: RouteURL[];
    LinkComponent: (route: RouteURL) => ReactNode;
    customClassName?: CSS_Class;
    menuItemClassName?: CSS_Class;
}

const SlidingRouteMenu = ({ routes, LinkComponent, customClassName, menuItemClassName }: Props) => {
    const Links = routes.map((route, index) => (
        <SlidingRouteMenuItem
            key={index}
            customClassName={menuItemClassName}
        >
            {LinkComponent(route)}
        </SlidingRouteMenuItem>
    ));

    const [ isHovered, setIsHovered ] = useState(false);

    return (
        <ul
            className={`
                ${customClassName}
                ${styles.slidingRouteMenu}
            `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onFocus={() => setIsHovered(true)}
            onBlur={() => setIsHovered(false)}
        >
            {Links}
        </ul>
    );
};

export default SlidingRouteMenu;