import type { ReactNode } from 'react';

import type { RouteURL } from '../../types/linkTypes';
import type { CSS_Class } from '../../types/CSS_Types';

import styles from './SlidingRouteMenu.module.scss';

import SlidingRouteMenuItem from './sliding-route-menu-item/SlidingRouteMenuItem';

interface Props {
    routes: RouteURL[];
    LinkComponent: (route: RouteURL) => ReactNode;
    customClassName?: CSS_Class;
}

const SlidingRouteMenu = ({ routes, LinkComponent, customClassName }: Props) => {
    const Links = routes.map((route, index) => (
        <SlidingRouteMenuItem key={index}>
            {LinkComponent(route)}
        </SlidingRouteMenuItem>
    ));

    return (
        <ul
            className={`
                ${customClassName}
                ${styles.slidingRouteMenu}
            `}
        >
            {Links}
        </ul>
    );
};

export default SlidingRouteMenu;