export const getFuncNameFrom = (filename: string): string => {
  return filename
    .trim()
    .replace('.js', '')
    .replace('.ts', '')
    .trim()
    .replace(/\s/g, '-')
    .replace(/[^0-9a-zA-Z\-_.]/g, '')
    .split(/-|_|\./)
    .filter((word: string): boolean => (word && word.length > 0 ? true : false))
    .map((word: string, wordIndex: number): string => {
      if (wordIndex === 0) {
        return word.toLocaleLowerCase();
      }
      return [...word]
        .map((char, charIndex): string => {
          if (charIndex === 0) {
            return char.toUpperCase();
          }
          return char;
        })
        .join('');
    })
    .join('');
};
