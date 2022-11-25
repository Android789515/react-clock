import sunIcon from '../../icons/sun.svg';
import moonIcon from '../../icons/moon.svg';
import styles from './ThemeIcon.module.scss';

interface Props {
    isDarkTheme: boolean;
}

const ThemeIcon = ({ isDarkTheme }: Props) => {
    return (
        <img
            src={isDarkTheme ? moonIcon : sunIcon}
            className={styles.themeIcon}
            alt={isDarkTheme ? 'Dark Theme' : 'Light Theme'}
        />
    );
};

export default ThemeIcon;