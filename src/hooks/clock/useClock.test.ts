import { renderHook } from '@testing-library/react';

import useClock from './useClock';

describe('useClock', () => {
    it('Exposes a function for starting the "clock"', () => {
        const doNothing = () => {};

        const { result: { current: hookCall } } = renderHook(() => useClock(doNothing));

        const startClock = expect.any(Function);
        const expectedResult = { startClock };

        expect(hookCall).toMatchObject(expectedResult);
    });

    it('Exposes a function for stopping the "clock"', () => {
        const doNothing = () => {};

        const { result: { current: hookCall } } = renderHook(() => useClock(doNothing));

        const stopClock = expect.any(Function);
        const expectedResult = { stopClock };

        expect(hookCall).toMatchObject(expectedResult);
    });
});