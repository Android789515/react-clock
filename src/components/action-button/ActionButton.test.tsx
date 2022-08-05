import { screen, render } from '@testing-library/react';

import ActionButton from './ActionButton';

describe('ActionButton', () => {
    it('Runs a function passed to it with props once the button is pressed', () => {
        let count = 0;
        const increaseCount = () => count += 1;

        const buttonAction = 'Increase Count';
        const controlsNothing = '';
        render(
            <ActionButton
                actionName={buttonAction}
                ariaControls={controlsNothing}
                onClick={increaseCount}
            />
        );

        const ButtonElement = screen.getByText(buttonAction);
        ButtonElement.click();

        const expectedCountValue = 1;
        expect(count).toEqual(expectedCountValue);
    });
});