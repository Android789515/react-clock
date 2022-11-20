import type { ReactNode } from 'react';

import type { CSS_Class } from '../../types/CSS_Types';

import styles from './SlideMenu.module.scss';

interface Props {
    menuItems: [];
    itemComponent: ReactNode;
    customClassName?: CSS_Class;
}

const SlideMenu = ({ menuItems, itemComponent, customClassName }: Props) => {
    return (
        <ul
            className={`
                ${customClassName}
                ${styles.slideMenu}
            `}
        >

        </ul>
    );
};

export default SlideMenu;