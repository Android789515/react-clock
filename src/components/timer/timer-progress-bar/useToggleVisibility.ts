import { useState } from 'react';

const useTimeBarVisibilityToggle = (startVisible: boolean) => {
    type IsTimeBarShown = boolean;
    const [ shouldShowTimeBar, setShouldShowTimeBar ] = useState<IsTimeBarShown>(startVisible);

    const getTimeBarVisibility = () => shouldShowTimeBar;
    const showTimeBar = () => setShouldShowTimeBar(true);
    const hideTimeBar = () => setShouldShowTimeBar(false);

    return {
        getTimeBarVisibility,
        showTimeBar,
        hideTimeBar
    }
};


export default useTimeBarVisibilityToggle;