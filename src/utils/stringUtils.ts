type Character = string;

export const prefix = (string: string, prefix: string, repeatAmount?: number) => {
    const shouldRepeatPrefix = repeatAmount || repeatAmount === 0;

    if (shouldRepeatPrefix) {
        // Array must be spread to populate empty slots.
        const repeatedPrefix = [...Array(repeatAmount)].map(() => prefix);

        const everyPrefix = '';
        return repeatedPrefix.join(everyPrefix) + string;
    } else {
        return prefix + string;
    }
};

export const insertCharacter = (character: Character, string: string, everyNthCharacter: number) => {
    // Match may return null, so a fallback is used.
    const decomposedString = string.match(new RegExp(`.{1,${everyNthCharacter}}`, 'g')) || [string];

    return decomposedString.join(character);
};

export const removeCharacter = (character: Character, string: string) => {
    const everyCharacter = '';
    return string.split(character).join(everyCharacter);
};