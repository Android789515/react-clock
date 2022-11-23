import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import useGetRouteIcons from './useGetRouteIcons';

import SlidingRouteMenu from '../../sliding-route-menu/SlidingRouteMenu';
import ClockFeatureLink from './clock-feature-link/ClockFeatureLink';
import { RouteURL } from '../../../types/linkTypes';

interface Props {
    isDarkTheme: boolean
}

const ClockFeatureLinks = ({ isDarkTheme }: Props) => {
    const { pathname } = useLocation();

    const { getRoutesAndIcons, setActiveRouteIcon, getIconForRoute } = useGetRouteIcons();

    useEffect(() => {
        setActiveRouteIcon(pathname);
    }, [pathname])

    const routes = getRoutesAndIcons().map(([ route ]) => route);
    const isCurrentFeature = (route: RouteURL) => pathname === route || pathname === '/' + route;
    return (
        <nav>
            <SlidingRouteMenu
                routes={routes}
                LinkComponent={(route) => (
                    <ClockFeatureLink
                        route={route}
                        iconPath={getIconForRoute(route)}
                        isDarkTheme={isDarkTheme}
                        isActiveLink={isCurrentFeature(route)}
                    />
                )}
            />
        </nav>
    );
};

export default ClockFeatureLinks;