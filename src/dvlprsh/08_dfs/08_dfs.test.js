import targetNumber from "./solution";

describe("08_dfs_test", () => {
  it("타겟 넘버", () => {
    const result = targetNumber([1, 1, 1, 1, 1], 3);
    expect(result).toEqual(5);
  })
});