import type { MouseEventHandler } from 'react';

type Text = string;
type CSS_Styles = string;
interface Props {
    actionName: Text;
    styles?: CSS_Styles;
    onClick: MouseEventHandler;
}

const ActionButton = ({ actionName, styles, onClick }: Props) => {
    return (
        <button className={styles} onClick={onClick}>
            {actionName}
        </button>
    )
};

export default ActionButton;