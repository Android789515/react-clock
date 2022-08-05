import { screen, render } from '@testing-library/react';

import { AriaRoles } from '../../types/ariaTypes';
import { stopWatchComponentTitle } from './stop-watch-buttons/StopWatchButtons';

import StopWatch from './StopWatch';

describe('StopWatch', () => {
    it('Renders a ClockDisplay component', () => {
        render(<StopWatch />);

        const ClockDisplay = screen.getByRole(AriaRoles.timer);

        expect(ClockDisplay).toBeInTheDocument();
    });

    it('Renders a StopWatchButtons component, which has all the buttons for this feature', () => {
        render(<StopWatch />);

        const StopWatchButtons = screen.getByTitle(stopWatchComponentTitle);

        expect(StopWatchButtons).toBeInTheDocument();
    });
});