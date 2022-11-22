import { useState } from 'react';

import type { IconPath, RouteURL } from '../../../types/linkTypes';

import timeClockIcon from './icons/time-clock.svg';
import stopWatchIcon from './icons/stop-watch.svg';
import timerIcon from './icons/timer.svg';

const useGetRouteIcons = () => {
    interface RouteIcons {
        '/': IconPath;
        stopwatch: IconPath;
        timer: IconPath;
    }

    const [ routeIcons, updateRouteIcons ] = useState<RouteIcons>({
        '/': timeClockIcon,
        stopwatch: stopWatchIcon,
        timer: timerIcon
    });

    const getRoutesAndIcons = () => Object.entries(routeIcons);

    const getIconForRoute = (route: RouteURL) => routeIcons[route as keyof RouteIcons];

    const setActiveRouteIcon = (pathname: RouteURL) => {
        const activeLink = pathname.split('/').at(-1) || '/';
        updateRouteIcons(prevRouteIcons => {
            return {
                [activeLink]: routeIcons[activeLink as keyof RouteIcons],
                ...prevRouteIcons
            };
        });
    };

    return {
        getRoutesAndIcons,
        getIconForRoute,
        setActiveRouteIcon
    };
};

export default useGetRouteIcons;