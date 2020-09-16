import immigration from "./solution";

describe("08_dfs_test", () => {
  it("입국심사", () => {
    const result = immigration(6, [7, 10]);
    expect(result).toEqual(28);
  })
});