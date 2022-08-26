import type { ReactNode } from 'react';
import { Fragment, useEffect, useState } from 'react';
import { v4 as generateUUID } from 'uuid';

import type { HTML_ID } from '../../types/HTML_Types';

type StartingCoordinate = string;
type EndingCoordinate = string;
interface GradientUnits {
    x1: StartingCoordinate;
    x2: EndingCoordinate;
    y1: StartingCoordinate;
    y2: EndingCoordinate;
}

type SVG_Stops = ReactNode | ReactNode[];
type GradientColorURL = `url(#${HTML_ID})`;
interface Props {
    linear?: boolean;
    radial?: boolean;
    gradientUnits: GradientUnits;
    stops: SVG_Stops;
    renderWithGradient: (gradientColor: GradientColorURL) => JSX.Element;
}

const GradientProvider = ({ linear, radial, gradientUnits, stops, renderWithGradient }: Props) => {
    type UUID = string;
    type GradientID = UUID;
    const [ gradientID ] = useState<GradientID>(generateUUID());
    const gradientURL: GradientColorURL = `url(#${gradientID})`;

    // Since stops may be provided as an array, this
    // component will add keys automatically.
    const [ processedStops, updateProcessedStops ] = useState(stops);

    const keyStopsIfArray = () => {
        if (Array.isArray(stops)) {
            const keyedStops = stops.map(stop => (
                <Fragment key={generateUUID()}>
                    {stop}
                </Fragment>
            ));

            updateProcessedStops(keyedStops);
        }
    };
    useEffect(keyStopsIfArray, [])

    const [ GradientType, setGradientType ] = useState<JSX.Element>();
    useEffect(() => {
        if (linear) {
            setGradientType(
                <linearGradient
                    id={gradientID}
                    {...gradientUnits}
                >
                    {processedStops}
                </linearGradient>
            );
        } else if (radial) {
            setGradientType(
                <radialGradient
                    id={gradientID}
                    {...gradientUnits}
                >
                    {processedStops}
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