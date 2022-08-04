import type { TimeInSeconds } from '../../types/timeTypes';
import Clock from './clock';

describe('Clock', () => {
    it('Runs a function passed to it every second when its startClock function is invoked', () => {
        let count = 0;
        const increaseCount = () => {
            count += count + 1;
        };

        const clock = new Clock(increaseCount);
        clock.startClock();

        type Count = number;
        let countResult = 0;
        const grabCountResult = (currentCount: Count) => countResult = currentCount;

        const threeSeconds: TimeInSeconds = 3000;
        jest.advanceTimersByTime(threeSeconds);
        grabCountResult(count);

        clock.stopClock();

        const expectedCount = 3;
        expect(countResult).toEqual(expectedCount);
    });
});