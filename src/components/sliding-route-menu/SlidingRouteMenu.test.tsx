import { screen, render } from '@testing-library/react';

import { MemoryRouter } from 'react-router-dom';

import type { RouteURL } from '../../types/linkTypes';
import { AriaRoles } from '../../types/ariaTypes';

import SlidingRouteMenu from './SlidingRouteMenu';
import ClockFeatureLink from '../clock-features/clock-feature-links/clock-feature-link/ClockFeatureLink';

describe('SlidingRouteMenu', () => {
    it('Renders a SlidingRouteMenuItem component for each menu item that was passed to it', () => {
        const routes: RouteURL[] = ['/', 'anotherRoute'];

        render(
            <MemoryRouter>
                <SlidingRouteMenu
                    routes={routes}
                    LinkComponent={
                        <ClockFeatureLink
                            route={''}
                            iconPath={''}
                        />
                    }
                />
            </MemoryRouter>
        );

        const SlidingRouteMenuItems = screen.getAllByRole(AriaRoles.listItem);

        expect(SlidingRouteMenuItems).toHaveLength(2);
    });
});