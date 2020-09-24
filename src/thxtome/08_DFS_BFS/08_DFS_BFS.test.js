import { targetNumber } from "./targetNumber";
import { farthestNode } from "./farthestNode";

describe("targetNumber", () => {
  it("타겟 넘버", () => {
    const result = targetNumber([1, 1, 1, 1, 1], 3);
    expect(result).toEqual(5);
  });
});

describe("farthestNode", () => {
  it("가장 먼 노드", () => {
    const result = farthestNode(6,[[3, 6], [4, 3], [3, 2], [1, 3], [1, 2], [2, 4], [5, 2]]);
    expect(result).toEqual(3);
  });
});
