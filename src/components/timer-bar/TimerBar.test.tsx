import { screen, render } from '@testing-library/react';

import TimerBar from './TimerBar';

describe('TimerBar', () => {
    it('Is hidden when inactive', () => {
        render(
            <TimerBar
                isActive={false}
                currentTimeInSeconds={0}
                totalTimeInSeconds={0}
            />
        );

        const Component = screen.getByRole('progressbar');

        const styles = window.getComputedStyle(Component);
        expect(styles).toEqual('none');
        // expect(Component).not.toBeVisible();
    });
});