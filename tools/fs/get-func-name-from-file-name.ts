export const getFuncNameFrom = (filename: string) => {
  return filename
    .trim()
    .replace('.js', '')
    .replace('.ts', '')
    .trim()
    .replace(/\s/g, '-')
    .replace(/[^0-9a-zA-Z\-_\.]/g, '')
    .split(/-|_|\./)
    .filter((word: string) => word && word.length > 0)
    .map((word: string, wordIndex: number) => {
      if (wordIndex === 0) {
        return word.toLocaleLowerCase();
      }
      return [...word]
        .map((char, charIndex) => {
          if (charIndex === 0) {
            return char.toUpperCase();
          }
          return char;
        })
        .join('');
    })
    .join('');
};
