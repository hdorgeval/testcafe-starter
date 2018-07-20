export const surround = (input: string) => {
  return {
    with: (quote: string): string => {
      if (input.startsWith(quote) && input.endsWith(quote)) {
        return input;
      }
      if (input.includes(quote) && quote === "'") {
        return `"${input}"`;
      }

      if (input.includes(quote) && quote === '"') {
        return `'${input}'`;
      }

      return `${quote}${input}${quote}`;
    },
  };
};
