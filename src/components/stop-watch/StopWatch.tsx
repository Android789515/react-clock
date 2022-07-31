import { AriaRoles } from '../../types/AriaRoles';

import styles from './StopWatch.module.scss'

import ClockDisplay from '../clock-display/ClockDisplay';

const StopWatch = () => {
    return (
        <div>
            <ClockDisplay />
        </div>
    )
};

export default StopWatch;