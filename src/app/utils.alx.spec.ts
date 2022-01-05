import { assertEqual } from "./utils.alx";

describe('utils.alx : assertEqual', () => {

  it("should compare similar arrays", () => {
    expect( assertEqual([1, 'a'], [1, 'a']) ).toBe(true);
  })

  it("should compare different arrays", () => {
    expect( assertEqual([1, 'a'], [1, 'd']) ).toBe(false);
  })

});
