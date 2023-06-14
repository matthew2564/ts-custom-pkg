import {Greeter} from '../index';

test('My Greeter', () => {
    expect(Greeter('Matt')).toBe('Hello Matt');
});
