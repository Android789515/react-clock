import { screen, render } from '@testing-library/react';

import type { TimeInMilliseconds } from '../../../types/timeTypes';
import { AriaRoles } from '../../../types/ariaTypes';

import Lap from './Lap';

describe('Lap', () => {
    it('Renders the formatted time passed to it as ' +
        'hours:minutes:seconds.milliseconds (all double digit)', () => {
        const testLap: TimeInMilliseconds = 46560043;

        render(<Lap lap={testLap} />);

        const Component = screen.getByRole(AriaRoles.listItem);

        const expectedContent = '12:56:00.04';
        expect(Component).toHaveTextContent(expectedContent);
    });
});