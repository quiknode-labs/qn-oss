import { isValidENSAddress } from '../../../src/api/utils/isValidENSAddress';

describe('isValidENSAddress', () => {
  it('should return true for a valid .eth name', () => {
    expect(isValidENSAddress('myens.eth')).toBe(true);
    expect(isValidENSAddress('ensdomain.eth')).toBe(true);
  });

  it('should return true for a valid .xyz name', () => {
    expect(isValidENSAddress('example.xyz')).toBe(true);
    expect(isValidENSAddress('myname.xyz')).toBe(true);
  });

  it('should return false for an invalid .abc name', () => {
    expect(isValidENSAddress('invalid.abc')).toBe(false);
  });

  it('should return false for just ".eth"', () => {
    expect(isValidENSAddress('.eth')).toBe(false);
  });

  it('should return true for valid emoji names', () => {
    expect(isValidENSAddress('🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉.eth')).toBe(true);
    expect(isValidENSAddress('🚀.xyz')).toBe(true);
  });

  it('should return true for valid label.address.eth names', () => {
    expect(isValidENSAddress('mylabel.address.eth')).toBe(true);
    expect(isValidENSAddress('💫.address.eth')).toBe(true);
  });

  it('should accept 255 character .eth names', () => {
    const ensName = 'a'.repeat(250) + '.eth';
    expect(isValidENSAddress(ensName)).toBe(true);
  });
});
