export const shortenedAddress = (address: string): string => {
  const begin = address.substring(0, 8);
  const ending = address.substr(-6);
  return `${begin}...${ending}`;
};

export const BREAKPOINT = 500;
