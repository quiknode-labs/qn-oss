/**
 * https://eips.ethereum.org/EIPS/eip-137#name-syntax
 *
 * explanation of the regex pattern:
 * ^  Matches the start of the string
 * (?=.{3,255}$) Lookahead assertion for the length of the string (3 to 255 characters)
 * [\p{L}\p{N}\p{Pd}\p{M}\p{S}\u{1F300}-\u{1F6FF}]+  Matches one or more Unicode letter, number, punctuation, symbol, or character in the specified emoji range
 * (\.[\p{L}\p{N}\p{Pd}\p{M}\p{S}\u{1F300}-\u{1F6FF}]+)*  Matches zero or more occurrences of a dot followed by one or more Unicode characters
 * \.(?:eth|xyz|art)  Matches a dot followed by either 'eth', 'xyz', or 'art'
 * $  Matches the end of the string
 *
 */
export function isValidENSAddress(ensAddress: string): boolean {
  const allowedTLDs = ['eth', 'xyz', 'art'];
  const unicodeAndEmojis =
    '[\\p{L}\\p{N}\\p{Pd}\\p{M}\\p{S}\\u{1F300}-\\u{1F6FF}]';
  const regexPattern = `^(?=.{3,255}$)${unicodeAndEmojis}+(\\.${unicodeAndEmojis}+)*\\.(?:${allowedTLDs.join(
    '|'
  )})$`;
  const regex = new RegExp(regexPattern, 'mu');
  return regex.test(ensAddress);
}
