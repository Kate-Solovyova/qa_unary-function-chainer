
describe('chainer', () => {
const { chainer } = require('./chainer');
    
    it('should return result', () => {
        const f1 = jest.fn((x) => x - 3);
        const f2 = jest.fn((x) => x / 3);
        const f3 = jest.fn((x) => x + 3);

        const result = chainer([f1, f2, f3])(15);

        expect(result)
            .toBe(7);
    });

    it('should return result f1', () => {
        const f1 = jest.fn((x) => x - 3);
        const f2 = jest.fn((x) => x / 3);
        const f3 = jest.fn((x) => x + 3);

        const result = chainer([f1, f2, f3])(15);

        expect(f1.mock.results[0].value)
            .toBe(12);
    });

    it('should return result f2', () => {
        const f1 = jest.fn((x) => x - 3);
        const f2 = jest.fn((x) => x / 3);
        const f3 = jest.fn((x) => x + 3);

        const result = chainer([f1, f2, f3])(15);

        expect(f2.mock.results[0].value)
            .toBe(4);
    });

    it('should return result f3', () => {
        const f1 = jest.fn((x) => x - 3);
        const f2 = jest.fn((x) => x / 3);
        const f3 = jest.fn((x) => x + 3);

        const result = chainer([f1, f2, f3])(15);

        expect(f3.mock.results[0].value)
            .toBe(7);
    });
});
