import { useEffect, useRef } from 'react';

import alarmSound from './alarm.ogg';

interface Props {
    shouldRingAlarm: boolean;
}

const Alarm = ({ shouldRingAlarm }: Props) => {
    const audioRef = useRef<HTMLAudioElement>(null);

    const ringAlarm = () => {
        audioRef.current?.play();
    };

    const stopAlarm = () => {
        const audioElement = audioRef.current;

        if (audioElement) {
            audioElement.pause();
            audioElement.currentTime = 0;
        }
    };

    useEffect(() => {
        if (shouldRingAlarm) {
            ringAlarm();
        } else {
            stopAlarm();
        }
    }, [shouldRingAlarm])

    return (
        <audio
            src={alarmSound}
            ref={audioRef}
            loop
        />
    );
};

export default Alarm;