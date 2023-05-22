export function isValidENSAddress(ensAddress: string): boolean {
  const allowedTLDs = ['eth', 'xyz', 'art'];
  const regex = new RegExp(
    `^(?=.{3,255}$)[a-z0-9-]+(\\.[a-z0-9-]+)*\\.(${allowedTLDs.join('|')})$`,
    'i'
  );
  return regex.test(ensAddress);
}
