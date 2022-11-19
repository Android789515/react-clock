import { useState } from 'react';

const use12hTime = (isInitially12hTime: boolean) => {
    const [ is12hTime, setIs12hTime ] = useState(isInitially12hTime);

    const getIs12hTime = () => is12hTime;

    return {
        getIs12hTime
    };
};

export default use12hTime;