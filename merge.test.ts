import { merge } from "./merge";

describe("test merge function", () => {
  test("Merge Success", () => {
    const col1: number[] = [-2, 0, 3, 4, 10];
    const col2: number[] = [-3, -1, 2, 6, 11];
    const expectResult: number[] = [-3, -2, -1, 0, 2, 3, 4, 6, 10, 11];
    const actualResult: number[] = merge(col1, col2);
    expect(actualResult).toEqual(expectResult);
  });

  test("Merge with empty array", () => {
    const col1: number[] = [];
    const col2: number[] = [-5, -3, 1, 2, 4];
    const expectResult: number[] = col2;
    const actualResult: number[] = merge(col1, col2);
    expect(actualResult).toEqual(expectResult);
  });
});
