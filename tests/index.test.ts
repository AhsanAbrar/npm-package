import { sum } from '../src/index';

test('adds 5 + 7 to equal 12', () => {
    expect(sum(5, 7)).toBe(12);
});

test('adds 7 + 8 to equal 15', () => {
    expect(sum(7, 8)).toBe(15);
});
