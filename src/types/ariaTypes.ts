import type { HTML_ID } from './HTML_Types';

export enum AriaRoles {
    button = 'button',
    heading = 'heading',
    input = 'input',
    main = 'main',
    progressbar = 'progressbar',
    timer = 'timer',
    toolbar = 'toolbar'
}

// First heading level is defined and
// the rest increment from that
export enum HeadingLevels {
    h1 = 1,
    h2,
    h3,
    h4,
    h5,
    h6
}

export enum InputTypes {
    number = 'number'
}

export type AriaControls = HTML_ID;