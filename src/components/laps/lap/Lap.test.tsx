import { screen, render } from '@testing-library/react';

import type { FormattedTime } from '../../../types/timeTypes';
import { AriaRoles } from '../../../types/ariaTypes';

import Lap from './Lap';

describe('Lap', () => {
    it('Renders the formatted time passed to it as ' +
        'hours:minutes:seconds.milliseconds (all double digit)', () => {
        const testLap: FormattedTime = {
            hours: '12',
            minutes: '56',
            seconds: '00',
            milliseconds: '43'
        };

        render(<Lap lap={testLap} />);

        const Component = screen.getByRole(AriaRoles.listItem);

        const expectedContent = '12:56:00.43';
        expect(Component).toHaveTextContent(expectedContent);
    });
});