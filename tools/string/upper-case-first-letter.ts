export const upperCaseFirstLetter = (input: string): string => {
  return [...input]
    .map((char: string, charIndex): string => {
      if (charIndex === 0) {
        return char.toUpperCase();
      }
      return char;
    })
    .join('');
};
