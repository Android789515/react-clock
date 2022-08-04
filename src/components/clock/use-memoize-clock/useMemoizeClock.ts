import { useState } from 'react';

import type Clock from '../clock';

const useMemoizeClock = (clockInstance: Clock) => {
    const [ clock ] = useState(clockInstance);

    return clock;
};

export default useMemoizeClock;