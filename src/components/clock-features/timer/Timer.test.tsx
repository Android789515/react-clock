import { render, screen } from '@testing-library/react';

import { AriaRoles } from '../../../types/ariaTypes';
import { timerProgressBarLabel } from './timer-progress-bar/TimerProgressBar';

import Timer from './Timer';

describe('Timer', () => {
    it('Renders a ClockDisplay component', () => {
        render(<Timer />);

        const EditableClockDisplayOverlay = screen.getByRole(AriaRoles.timer);
        expect(EditableClockDisplayOverlay).toBeInTheDocument();
    });

    it('Renders a TimerProgressBar component', () => {
        render(<Timer />);

        const TimerProgressBar = screen.getByLabelText(timerProgressBarLabel);
        expect(TimerProgressBar).toBeInTheDocument();
    });
});