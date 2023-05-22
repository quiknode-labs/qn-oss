export function isValidENSAddress(ensAddress: string): boolean {
  const allowedTLDs = ['eth', 'xyz', 'art'];
  const repeatedCharPattern =
    '[\\p{L}\\p{N}\\p{Pd}\\p{M}\\u{1F300}-\\u{1F6FF}]';
  const regexPattern = `^(?=.{3,255}$)${repeatedCharPattern}+(\\.${repeatedCharPattern}+)*\\.(?:${allowedTLDs.join(
    '|'
  )})$`;
  const regex = new RegExp(regexPattern, 'mu');
  return regex.test(ensAddress);
}
