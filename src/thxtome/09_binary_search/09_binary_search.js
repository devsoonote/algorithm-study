import { immigration } from "./immigration";

describe("immigration", () => {
  it("입국심사", () => {
    const result = immigration(6, [7, 10]);
    expect(result).toEqual(28);
  });
});
