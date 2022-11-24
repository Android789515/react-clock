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
                scale={1}
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
                scale={1}
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

    it('Optionally renders a component to display toggle information, ' +
        'passing it the toggle state', async () => {
        const toggleOnMessage = 'Toggled On';
        const toggleOffMessage = 'Toggled Off';

        render(
            <ToggleSwitch
                scale={1}
                isInitiallyToggledOn
                displayToggleState={(isToggledOn) => (
                    <p>{isToggledOn ? toggleOnMessage : toggleOffMessage}</p>
                )}
                whenToggledOn={() => {}}
                whenToggledOff={() => {}}
            />
        );

        // The ToggleSwitch is initially toggled on (see above).
        const ToggleDisplayComponent = screen.getByText(toggleOnMessage);

        expect(ToggleDisplayComponent).toBeInTheDocument();

        const ToggleSwitchComponent = screen.getByRole(AriaRoles.button);
        await waitFor(() => {
            ToggleSwitchComponent.click();
        });

        const UpdatedToggleDisplayComponent = screen.getByText(toggleOffMessage);

        expect(UpdatedToggleDisplayComponent).toBeInTheDocument();
    });
});