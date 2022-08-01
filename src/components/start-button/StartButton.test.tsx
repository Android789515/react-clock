import { screen, render } from '@testing-library/react';

import { AriaRoles } from '../../types/AriaRoles';

import StartButton from './StartButton';

describe('StartButton', () => {
    it('Displays the text "Start"', () => {
        render(<StartButton />);

        const buttonElement = screen.getByRole(AriaRoles.button);

        expect(buttonElement).toHaveTextContent('Start');
    });
});