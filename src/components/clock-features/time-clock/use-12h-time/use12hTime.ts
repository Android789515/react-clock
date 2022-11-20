import { useState } from 'react';

const use12hTime = (isInitially12hTime: boolean) => {
    const [ _is12hTime, setIs12hTime ] = useState(isInitially12hTime);

    const is12hTime = () => _is12hTime;

    const toggleIs12hTime = () => setIs12hTime(wasIt12hTime => !wasIt12hTime);

    return {
        is12hTime,
        toggleIs12hTime
    };
};

export default use12hTime;