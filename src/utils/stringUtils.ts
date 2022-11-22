import { v4 as generateUUID } from 'uuid';

type Character = string;
export const insertCharacter = (character: Character, string: string, everyNthCharacter: number) => {
    // Match may return null, so a fallback is used.
    const decomposedString = string.match(new RegExp(`.{1,${everyNthCharacter}}`, 'g')) || [string];

    return decomposedString.join(character);
};

export const removeCharacter = (character: Character, string: string) => {
    const everyCharacter = '';
    return string.split(character).join(everyCharacter);
};

export const segmentString = (string: string, segmentLength: number) => {
    const splitCharacter = generateUUID();
    const segmentableString = insertCharacter(splitCharacter, string, segmentLength);

    return segmentableString.split(splitCharacter);
};