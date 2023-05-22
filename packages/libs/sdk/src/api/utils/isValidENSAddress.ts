export function isValidENSAddress(ensAddress: string): boolean {
  const allowedTLDs = ['eth', 'xyz', 'art'];
  const regexPattern = `^(?=.{3,255}$)\\p{L}+[\\p{L}\\p{N}\\p{M}]*\\.(?:${allowedTLDs.join(
    '|'
  )})$`;
  console.log(regexPattern);
  const regex = new RegExp(regexPattern, 'mui');
  return regex.test(ensAddress);
}
