import { Board, emptyBoard, genBoard, similarBoard } from "./puissance4.data";
import { assertEqual } from "./utils.alx";

describe('Puissance4 data', () => {

  it("Two empty board should be similar", () => {
    const b2: Board = {width: 0, height: 0, data: []};
    expect( similarBoard(emptyBoard, b2) ).toBe(true);
  })

  it("Two similar non empty board should be similar", () => {
    const b1: Board = {width: 2, height: 2, data: [['RED'], []]};
    const b2: Board = {width: 2, height: 2, data: [['RED'], []]};
    expect( similarBoard(b1, b2) ).toBe(true);
  })

  it("Two different board v1", () => {
    const b1: Board = {width: 3, height: 2, data: [['RED'], [], []]};
    const b2: Board = {width: 2, height: 2, data: [['RED'], [], []]};
    expect( similarBoard(b1, b2) ).toBe(false);
  })

  it("Two different board v2", () => {
    const b1: Board = {width: 2, height: 3, data: [['RED'], [], []]};
    const b2: Board = {width: 2, height: 2, data: [['RED'], [], []]};
    expect( similarBoard(b1, b2) ).toBe(false);
  })

  it("Two different board v3", () => {
    const b1: Board = {width: 2, height: 2, data: [['RED'], []]};
    const b2: Board = {width: 2, height: 2, data: [['RED'], ['YELLOW']]};
    expect( similarBoard(b1, b2) ).toBe(false);
  })

  it("Two different board v4", () => {
    const b1: Board = {width: 2, height: 2, data: [['RED'], ['RED']]};
    const b2: Board = {width: 2, height: 2, data: [['RED'], ['YELLOW']]};
    expect( similarBoard(b1, b2) ).toBe(false);
  })

  it("empty != non empty", () => {
    const b2: Board = {width: 2, height: 2, data: [['RED'], []]};
    expect( similarBoard(emptyBoard, b2) ).toBe(false);
  })

  it("different board should not be similar", () => {
    const b1: Board = {width: 2, height: 2, data: [['RED'], ['YELLOW']]};
    const b2: Board = {width: 2, height: 2, data: [['RED'], []]};
    expect( similarBoard(emptyBoard, b2) ).toBe(false);
  })

  it("different board should not be similar", () => {
    const b1: Board = {width: 3, height: 2, data: []};
    const b2: Board = {width: 3, height: 2, data: [[], [], []]};
    expect( similarBoard(b1, b2) ).toBe(false);
  })

  it("same 3x2 board should be similar", () => {
    const b1: Board = {width: 3, height: 2, data: [[], ['RED'], ['YELLOW', 'RED']]}
    const b2: Board = {width: 3, height: 2, data: [[], ['RED'], ['YELLOW', 'RED']]}
    expect( similarBoard(b1, b2) ).withContext(JSON.stringify(b1)).toBe(true);
  })


  it("should not be able to parse a 1 height board from ", () => {
    const r = genBoard('');
    expect(r.error).toEqual("string non parsable to a Board");
  });

  it("should not be able to parse a board from an empty string", () => {
    const r = genBoard('');
    expect(r.error).toEqual("string non parsable to a Board");
  });

  it("should not be able to parse a bad board (0)", () => {
    const r = genBoard(`|R
                        |
                        |---`);
    expect(r.error).toEqual("string non parsable to a Board");
  });

  it("should not be able to parse a bad board (1)", () => {
    const r = genBoard(`|R

                        |---`);
    expect(r.error).toEqual("string non parsable to a Board");
  });

  it("should not be able to parse a bad board (2)", () => {
    const r = genBoard(`|
                        |
                        |- -`);
    expect(r.error).toEqual("string non parsable to a Board");
  });

  it("should not be able to parse a bad board (2')", () => {
    const r = genBoard(`|
                        |
                        -|---`);
    expect(r.error).toEqual("string non parsable to a Board");
  });

  it("should not be able to parse a bad board (3)", () => {
    const r = genBoard(`|
                        | X
                        |---`);
    expect(r.error).toEqual("string non parsable to a Board");
  });

  it("should not be able to parse a bad board (4)", () => {
    const r = genBoard(`|
                         R
                        |---`);
    expect(r.error).toEqual("string non parsable to a Board");
  });
  it("should be able to parse 1 height board (5)", () => {
    const r = genBoard(`|R
                        |---`);
    expect(r.error).toBeUndefined();
  });

  it("genBoard should be able to parse an empty 3x2", () => {
    const r = genBoard(`|
                        |
                        |---`);
    if (r.error) {
      fail("Error while generating the 3x2 empty board : " + r.error);
    } else {
      expect( similarBoard(r.board, {width: 3, height: 2, data: [[], [], []]} ) ).toBe(true);
    }
  });

  it("genBoard should be able to parse a lambda 3x2 (v1)", () => {
    const r = genBoard(`|  R
                        | RY
                        |---`);
    if (r.error) {
      fail("Error while generating the 3x2 empty board : " + r.error);
    } else {
      expect( similarBoard(r.board, {width: 3, height: 2, data: [[], ['RED'], ['YELLOW', 'RED']]} ) )
        .withContext( JSON.stringify(r.board) )
        .toBe(true);
    }
  });

  it("genBoard should be able to parse a lambda 3x2 (v2)", () => {
    const r = genBoard(`| R
                        |RY
                        |---`);
    if (r.error) {
      fail("Error while generating the 3x2 empty board : " + r.error);
    } else {
      expect( similarBoard(r.board, {width: 3, height: 2, data: [['RED'], ['YELLOW', 'RED'], []]} ) )
        .withContext( JSON.stringify(r.board) )
        .toBe(true);
    }
  });

});
