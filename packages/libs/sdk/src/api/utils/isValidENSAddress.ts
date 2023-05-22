export function isValidENSAddress(ensAddress: string): boolean {
  const allowedTLDs = ['eth', 'xyz', 'art'];
  const emojiRange = '\\u{1F300}-\\u{1F6FF}';
  const regexPattern = `^(?=.{3,255}$)[a-z0-9-]+(\\.[a-z0-9-${emojiRange}]+)*\\.(${allowedTLDs.join(
    '|'
  )})$`;
  const regex = new RegExp(regexPattern, 'iu');
  return regex.test(ensAddress);
}
