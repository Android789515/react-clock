import type { MouseEventHandler } from 'react';

import type { AriaControls } from '../../types/ariaTypes';

type Text = string;
type CSS_Styles = string;

interface Props {
    actionName: Text;
    styles?: CSS_Styles;
    ariaControls: AriaControls;
    onClick: MouseEventHandler;
}

const ActionButton = ({ actionName, styles, ariaControls, onClick }: Props) => {
    return (
        <button
            aria-controls={ariaControls}
            className={styles}
            onClick={onClick}
        >
            {actionName}
        </button>
    );
};

export default ActionButton;