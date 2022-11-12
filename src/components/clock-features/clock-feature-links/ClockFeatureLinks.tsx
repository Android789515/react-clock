import { NavLink } from 'react-router-dom';

import styles from './ClockFeatureLinks.module.scss';

const ClockFeatureLinks = () => {
    return (
        <nav>
            <ul className={styles.clockFeatureLinks}>
                <li>
                    <NavLink to={'/'}>Time Clock</NavLink>
                </li>

                <li>
                    <NavLink to={'stopwatch'}>Stop Watch</NavLink>
                </li>

                <li>
                    <NavLink to={'timer'}>Timer</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default ClockFeatureLinks;