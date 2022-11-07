import styles from './AppHeader.module.scss';

import ToggleSwitch from '../toggle-switch/ToggleSwitch';

const AppHeader = () => {
    return (
        <header
            className={styles.appHeader}
        >
            <ToggleSwitch />
        </header>
    );
};

export default AppHeader;