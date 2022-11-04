import type { HTML_ID } from './HTML_Types';

export enum AriaRoles {
    application = 'application',
    button = 'button',
    list = 'list',
    listItem = 'listitem',
    main = 'main',
    progressbar = 'progressbar',
    textInput = 'textbox',
    timer = 'timer',
    toolbar = 'toolbar',
}

export enum InputTypes {
    text = 'text',
}

export type AriaControls = HTML_ID;