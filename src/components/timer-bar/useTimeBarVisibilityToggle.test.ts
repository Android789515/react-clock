import { renderHook } from '@testing-library/react';

import useTimeBarVisibilityToggle from './useTimeBarToggle';

describe('useTimeBarToggle', () => {
    it('Returns a function to get the time bar toggle state (true or false)', () => {
        const { result } = renderHook(() => useTimeBarVisibilityToggle(false));

        expect(result).toReturnWith({
            getTimeBarVisibility: () => false,
        })
    });
});