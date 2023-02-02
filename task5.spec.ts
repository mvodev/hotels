import { doubleIntersection } from "./task5";

describe('check intersection', () => {
  const arr1 = [7, 17, 1, 9, 1, 17, 56, 56, 23];
  const arr2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];
  it('intersection', () => {
    const result = doubleIntersection(arr1,arr2)
    expect(result).toStrictEqual([1,17]);
  });
});
