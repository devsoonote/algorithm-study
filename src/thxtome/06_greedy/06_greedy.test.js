import { connectingIsland } from "./connectingIsland";
import { makeBigNumber } from "./makeBigNumber";

describe("connectingIsland", () => {
  it("섬 연결하기", () => {
    const result = connectingIsland(4, [
      [0, 1, 1],
      [0, 2, 2],
      [1, 2, 5],
      [1, 3, 1],
      [2, 3, 8],
    ]);
    expect(result).toEqual(4);
  });
});

describe("makeBigNumber", () => {
  it("큰 수 만들기", () => { 
    const result = makeBigNumber(987654,3);
    expect(result).toEqual("987");
  });
});
