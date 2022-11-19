import { renderHook } from '@testing-library/react';

import use12hTime from './use12hTime';

describe('use12hTime', () => {
    it('Can check if 12h time format is being used', () => {
        const isInitially12hTime = true;
        const { result } = renderHook(() => use12hTime(isInitially12hTime));

        const { getIs12hTime } = result.current;
        expect(getIs12hTime()).toEqual(true);
    });
});