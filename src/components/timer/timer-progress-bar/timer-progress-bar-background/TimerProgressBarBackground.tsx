import timerBarStyles from '../TimerProgressBar.module.scss';
import styles from './TimerProgressBarBackground.module.scss';

interface Props {
    isLightTheme: boolean;
}

const TimerProgressBarBackground = ({ isLightTheme }: Props) => {
    return (
        <circle
            className={`
                ${timerBarStyles.timerBar}
                ${isLightTheme ? styles.light : styles.dark}
            `}
        />
    );
};

export default TimerProgressBarBackground;