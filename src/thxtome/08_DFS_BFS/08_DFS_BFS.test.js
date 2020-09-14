import { targetNumber } from "./targetNumber";

describe("targetNumber", () => {
  it("타겟 넘버", () => {
    const result = targetNumber([1, 1, 1, 1, 1], 3);
    expect(result).toEqual(5);
  });
});
