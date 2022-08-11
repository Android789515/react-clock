import styles from './AppHeader.module.scss';

import ThemeSwitch from '../theme-switch/ThemeSwitch';

const AppHeader = () => {
    return (
        <header
            className={styles.appHeader}
        >
            <ThemeSwitch />
        </header>
    );
};

export default AppHeader;