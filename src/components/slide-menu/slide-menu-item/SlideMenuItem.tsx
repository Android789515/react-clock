import type { ReactNode } from 'react';

import type { CSS_Class } from '../../../types/CSS_Types';

import styles from './SlideMenuItem.module.scss';

interface Props {
    customClassName?: CSS_Class
    children: ReactNode
}

const SlideMenuItem = ({ customClassName, children }: Props) => {
    return (
        <li
            className={`
                ${customClassName}
                ${styles.slideMenuItem}
            `}
        >
            {children}
        </li>
    );
};

export default SlideMenuItem;