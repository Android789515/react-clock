import { screen, render, renderHook } from '@testing-library/react';

import AlarmSetter from './AlarmSetter';

describe('AlarmSetter', () => {
    it('Should have the text "Set alarm for:"', () => {
        render(
            <AlarmSetter />
        );

        const expectedText = screen.getByText('Set alarm for:');
        expect(expectedText).toBeInTheDocument();
    });
});