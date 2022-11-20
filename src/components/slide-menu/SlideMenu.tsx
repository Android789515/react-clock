import type { CSS_Class } from '../../types/CSS_Types';

import styles from './SlideMenu.module.scss';

interface Props {
    menuItems: [];
    customClassName?: CSS_Class;
}

const SlideMenu = ({ menuItems, customClassName }: Props) => {
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