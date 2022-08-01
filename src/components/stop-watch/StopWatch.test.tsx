import { screen, render } from '@testing-library/react';

import { AriaRoles } from '../../types/AriaRoles';
import StopWatch from './StopWatch';

describe('StopWatch', () => {
    it('Renders a ClockDisplay component', () => {
        render(<StopWatch />);

        const ClockDisplay = screen.getByRole(AriaRoles.timer);

        expect(ClockDisplay).toBeInTheDocument();
    });

    it('Renders a StartButton component', () => {
        render(<StopWatch />);

        const StartButton = screen.getByRole(AriaRoles.button, { name: 'Start' });

        expect(StartButton).toBeInTheDocument();
    });

    it('Renders a StopButton component', () => {
        render(<StopWatch />);

        const StopButton = screen.getByRole(AriaRoles.button, { name: 'Stop' });

        expect(StopButton).toBeInTheDocument();
    });

    it('Renders a ResetButton component', () => {
        render(<StopWatch />);

        const ResetButton = screen.getByRole(AriaRoles.button, { name: 'Reset' });

        expect(ResetButton).toBeInTheDocument();
    })
});