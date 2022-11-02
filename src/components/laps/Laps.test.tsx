import { screen, render, within } from '@testing-library/react';

import { AriaRoles } from '../../types/ariaTypes';
import type { FormattedTime } from '../../types/timeTypes';

import Laps from './Laps';

describe('Laps', () => {
    it('Renders a Lap component (li element) for each lap', () => {
        const laps: FormattedTime[] = [
            { hours: '01', minutes: '00', seconds: '21', milliseconds: '000' },
            { hours: '26', minutes: '12', seconds: '01', milliseconds: '250' },
            { hours: '00', minutes: '00', seconds: '00', milliseconds: '100' }
        ];

        render(<Laps laps={laps} />);

        const Component = screen.getByRole(AriaRoles.list);

        const { getAllByRole } = within(Component);
        const LapComponents = getAllByRole(AriaRoles.listItem);

        expect(LapComponents).toHaveLength(3);
    });
});