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
    const [ isHovered, setIsHovered ] = useState(false);

    const getIconSize = () => {
        const appLayoutBreakpoint = 564;
        const isSmallScreen = window.innerWidth < appLayoutBreakpoint;

        // In ems
        return isSmallScreen ? 1.25 : 3;
    };

    const getSlideAmount = (routeMenuItemIndex: number) => {

        const isFirstRouteMenuItem = routeMenuItemIndex === 0;

        if (isHovered) {
            return 'revert';
        } else if (!isFirstRouteMenuItem) {
            const minTranslation = getIconSize() * 2;
            const distanceFromFirst = routeMenuItemIndex;

            return `translateX(-${minTranslation * distanceFromFirst}em)`;
        }
    };

    const Links = routes.map((route, index) => (
        <SlidingRouteMenuItem
            key={index}
            isActiveRoute={index === 0}
            customClassName={menuItemClassName}
            customStyle={{
                transform: getSlideAmount(index)
            }}
        >
            {LinkComponent(route)}
        </SlidingRouteMenuItem>
    ));

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