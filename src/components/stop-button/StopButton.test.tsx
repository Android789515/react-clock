import { screen, render } from '@testing-library/react';

import { AriaRoles } from '../../types/AriaRoles';

import StopButton from '../stop-button/StopButton';

describe('StopButton', () => {
    it('Displays the text "Stop"', () => {
        render(<StopButton />);

        const buttonElement = screen.getByRole(AriaRoles.button);

        expect(buttonElement).toHaveTextContent('Stop');
    });
});