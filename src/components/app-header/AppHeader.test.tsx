import { screen, render } from '@testing-library/react';

import AppHeader from './AppHeader';

describe('AppHeader', () => {
    it('Renders a ThemeSwitch component', () => {
        render(<AppHeader />);

        const ThemeSwitchComponent = screen.getByRole('button');

        expect(ThemeSwitchComponent).toBeInTheDocument();
    });
});