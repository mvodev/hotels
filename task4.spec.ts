import { isPrime } from "./task4";

describe('check is prime method', () => {
  it('1', () => {
    const result = isPrime(1)
    expect(result).toStrictEqual(false);
  });

  it('2', () => {
    const result = isPrime(2)
    expect(result).toStrictEqual(true);
  });

  it('3', () => {
    const result = isPrime(3)
    expect(result).toStrictEqual(true);
  });

  it('4', () => {
    const result = isPrime(4)
    expect(result).toStrictEqual(false);
  });

  it('5', () => {
    const result = isPrime(5)
    expect(result).toStrictEqual(true);
  });

  it('21', () => {
    const result = isPrime(21)
    expect(result).toStrictEqual(false);
  });
});