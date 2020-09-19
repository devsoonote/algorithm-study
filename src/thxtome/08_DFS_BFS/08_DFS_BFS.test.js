import { targetNumber } from "./targetNumber";
import { travelRoute } from "./travelRoute";

describe("targetNumber", () => {
  it("타겟 넘버", () => {
    const result = targetNumber([1, 1, 1, 1, 1], 3);
    expect(result).toEqual(5);
  });
});

describe("travelRoute", () => {
  it("여행 경로", () => {
    const result = travelRoute([
      ["ICN", "JFK"],
      ["HND", "IAD"],
      ["JFK", "HND"],
    ]);
    expect(result).toEqual(["ICN", "JFK", "HND", "IAD"]);
  });
});
