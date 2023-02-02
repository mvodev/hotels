import { getSpellCase } from "./task3";

describe('check spell cases correct', () => {
  it('number1', () => {
    const result = getSpellCase(1)
    expect(result).toStrictEqual('компьютер');
  });

  it('number2', () => {
    const result = getSpellCase(2)
    expect(result).toStrictEqual('компьютера');
  });

  it('number5', () => {
    const result = getSpellCase(5)
    expect(result).toStrictEqual('компьютеров');
  });

  it('number21', () => {
    const result = getSpellCase(21)
    expect(result).toStrictEqual('компьютер');
  });
});