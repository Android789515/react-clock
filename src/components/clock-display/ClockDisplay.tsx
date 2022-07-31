import { AriaRoles } from '../../types/AriaRoles';

import styles from './ClockDisplay.module.scss'

const ClockDisplay = () => {
    return (
        <h1 role={AriaRoles.timer}></h1>
    );
};

export default ClockDisplay;