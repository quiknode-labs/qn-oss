import { isValidENSAddress } from '../../../src/api/utils/isValidENSAddress';

describe('isValidENSAddress', () => {
  describe('should return true for', () => {
    it('a valid .eth name', () => {
      expect(isValidENSAddress('myens.eth')).toBe(true);
      expect(isValidENSAddress('ensdomain.eth')).toBe(true);
    });

    it('a valid .xyz name', () => {
      expect(isValidENSAddress('example.xyz')).toBe(true);
      expect(isValidENSAddress('myname.xyz')).toBe(true);
    });

    it('valid emoji names', () => {
      expect(isValidENSAddress('🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉🐉.eth')).toBe(true);
      expect(isValidENSAddress('🚀.xyz')).toBe(true);
      expect(isValidENSAddress('somewordsbefore🚀.eth')).toBe(true);
    });

    it('valid label.address.eth names', () => {
      expect(isValidENSAddress('mylabel.address.eth')).toBe(true);
      expect(isValidENSAddress('💫.address.eth')).toBe(true);
    });

    it('255 character .eth names', () => {
      const ensName = 'a'.repeat(250) + '.eth';
      expect(isValidENSAddress(ensName)).toBe(true);
    });

    it('unicode .eth names', () => {
      expect(isValidENSAddress('大木888.eth')).toBe(true);
    });

    it('special characters', () => {
      expect(isValidENSAddress('$$$.eth')).toBe(true);
    });
  });

  describe('should return false for', () => {
    it('an invalid .abc name', () => {
      expect(isValidENSAddress('invalid.abc')).toBe(false);
    });

    it('just ".eth"', () => {
      expect(isValidENSAddress('.eth')).toBe(false);
    });

    it('an empty string', () => {
      expect(isValidENSAddress('')).toBe(false);
    });
  });
});
