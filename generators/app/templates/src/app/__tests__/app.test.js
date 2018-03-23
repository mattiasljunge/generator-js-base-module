import app from '../app';

describe('app', () => {
  describe('when passing string', () => {
    it('prepends with `Hello`', () => {
      expect(app('World')).toBe('Hello World');
    });
  });

  describe('when passing wrong input', () => {
    it('throws an `TypeError`', () => {
      expect(() => app(1)).toThrow(TypeError);
      expect(() => app(1)).toThrow('Expected a string, got number');
    });
  });
});
