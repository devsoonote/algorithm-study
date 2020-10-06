import { integerTriangle } from "./integerTriangle";
import { calculateByN } from "./calculateByN";

describe("integerTriangle", () => {
  it("정수 삼각형", () => {
    const result = integerTriangle([
      [7],
      [3, 8],
      [8, 1, 0],
      [2, 7, 4, 4],
      [4, 5, 2, 6, 5],
    ]);
    expect(result).toEqual(30);
  });
});

describe("calculateByN", () => {
  it("n으로 표현", () => {
    const result = calculateByN(5, 12);
    expect(result).toEqual(4);
  });
});
