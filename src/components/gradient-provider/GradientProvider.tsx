import type { ReactNode } from 'react';
import { useEffect, useState } from 'react';
import { v4 as generateUUID } from 'uuid';

interface GradientUnits {
    x1: string;
    x2: string;
    y1: string;
    y2: string;
}

interface Props {
    linear?: boolean;
    radial?: boolean;
    gradientUnits: GradientUnits;
    stops: ReactNode[];
    renderWithGradient: (gradientColor: string) => JSX.Element;
}

const GradientProvider = ({ linear, radial, gradientUnits, stops, renderWithGradient }: Props) => {
    const [ GradientType, setGradientType ] = useState<JSX.Element>();

    type UUID = string;
    type GradientID = UUID;
    const [ gradientID ] = useState<GradientID>(generateUUID());
    const gradientURL = `url(#${gradientID})`;

    useEffect(() => {
        if (linear) {
            setGradientType(
                <linearGradient
                    id={gradientID}
                    {...gradientUnits}
                >
                    {stops}
                </linearGradient>
            );
        } else if (radial) {
            setGradientType(
                <radialGradient
                    id={gradientID}
                    {...gradientUnits}
                >
                    {stops}
                </radialGradient>
            );
        }
    }, []);

    return (
        <>
            {GradientType}
            {renderWithGradient(gradientURL)}
        </>
    )
};

export default GradientProvider;