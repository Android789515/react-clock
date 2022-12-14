import { screen, render, within } from '@testing-library/react';

import type { TimeInMilliseconds } from '../../types/timeTypes';
import { AriaRoles } from '../../types/ariaTypes';

import Laps from './Laps';

describe('Laps', () => {
    it('Renders a Lap component (li element) for each saved lap' +
        'and one extra for the current lap', () => {
        const laps: TimeInMilliseconds[] = [ 1, 29876, 112 ];

        render(
        <Laps
            laps={laps}
            currentLapTime={0}
        />
        );

        const Component = screen.getByRole(AriaRoles.list);

        const { getAllByRole } = within(Component);
        const LapComponents = getAllByRole(AriaRoles.listItem);

        expect(LapComponents).toHaveLength(4);
    });
});