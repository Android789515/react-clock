import { screen, render, waitFor } from '@testing-library/react';

import { AriaRoles } from '../../types/ariaTypes';

import ToggleSwitch from './ToggleSwitch';

const toggleFunctions = (() => {
    const toggleOnFunction = () => {};
    const toggleOffFunction = () => {};
    return { toggleOnFunction, toggleOffFunction };
})();

describe('ToggleSwitch', () => {
    it('Runs a function when it\'s toggled on', async () => {
        const toggleOnFunctionSpy = jest.spyOn(toggleFunctions, 'toggleOnFunction');

        render(
            <ToggleSwitch
                whenToggledOn={toggleFunctions.toggleOnFunction}
                whenToggledOff={() => {}}
            />
        );

        const Component = screen.getByRole(AriaRoles.button);

        await waitFor(() => {
            Component.click();
        });

        expect(toggleOnFunctionSpy).toHaveBeenCalled();
    });

    it('Runs a function when it\'s toggled off', async () => {
        const toggleOffFunctionSpy = jest.spyOn(toggleFunctions, 'toggleOffFunction');

        render(
            <ToggleSwitch
                isInitiallyToggledOn
                whenToggledOn={() => {}}
                whenToggledOff={toggleFunctions.toggleOffFunction}
            />
        );

        const Component = screen.getByRole(AriaRoles.button);

        await waitFor(() => {
            Component.click();
        });

        expect(toggleOffFunctionSpy).toHaveBeenCalled();
    });
});