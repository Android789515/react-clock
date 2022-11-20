import { act } from 'react-dom/test-utils';
import { renderHook } from '@testing-library/react';

import use12hTime from './use12hTime';

describe('use12hTime', () => {
    it('Can check if 12h time format is being used', () => {
        const isInitially12hTime = true;
        const { result } = renderHook(() => use12hTime(isInitially12hTime));

        const { is12hTime } = result.current;
        expect(is12hTime()).toEqual(true);
    });

    it('Can switch the time format to 12h', () => {
        const isInitially12hTime = true;
        const { result } = renderHook(() => use12hTime(isInitially12hTime));

        const { toggleIs12hTime } = result.current;
        act(() => toggleIs12hTime());

        const not12hTime = false;
        expect(result.current.is12hTime()).toEqual(not12hTime);
    });
});