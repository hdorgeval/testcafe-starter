export const upperCaseFirstLetter = (input: string): string => {
  return [...input]
    .map((char, charIndex) => {
      if (charIndex === 0) {
        return char.toUpperCase();
      }
      return char;
    })
    .join('');
};
