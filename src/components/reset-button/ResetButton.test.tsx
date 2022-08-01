import { screen, render } from '@testing-library/react';

import { AriaRoles } from '../../types/AriaRoles';

import ResetButton from './ResetButton';

describe('ResetButton', () => {
    it('Displays the text "Reset"', () => {
        render(<ResetButton />);

        const buttonElement = screen.getByRole(AriaRoles.button);

        expect(buttonElement).toHaveTextContent('Reset');
    });
});