import { NavLink } from 'react-router-dom';

import styles from './ClockFeatureLinks.module.scss';

const ClockFeatureLinks = () => {
    const Links = ['/', 'stopwatch', 'timer'].map((link, index) => (
        <li key={index}>
            <NavLink
                to={link}
                className={styles.clockFeatureLink}
            >
                {link}
            </NavLink>
        </li>
    ));

    return (
        <nav>
            <ul className={styles.clockFeatureLinks}>
                {Links}
            </ul>
        </nav>
    );
};

export default ClockFeatureLinks;