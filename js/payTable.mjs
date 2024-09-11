import {
  AllSame,
  AnyBar,
  BARx1,
  BARx2,
  BARx3,
  Cherry,
  CherryOrSeven,
  LineFive,
  LineFour,
  LineOne,
  LineThree,
  LineTwo,
  Seven,
} from './constants.js';

export const payTable = Object.freeze({
  [AllSame]: {
    [BARx1]: {
      [LineOne]: 10,
      [LineTwo]: 10,
      [LineThree]: 20,
      [LineFour]: 30,
      [LineFive]: 40,
    },
    [BARx2]: {
      [LineOne]: 20,
      [LineTwo]: 20,
      [LineThree]: 30,
      [LineFour]: 40,
      [LineFive]: 50,
    },
    [BARx3]: {
      [LineOne]: 30,
      [LineTwo]: 30,
      [LineThree]: 40,
      [LineFour]: 50,
      [LineFive]: 60,
    },
    [Seven]: {
      [LineOne]: 150,
      [LineTwo]: 300,
      [LineThree]: 600,
      [LineFour]: 1200,
      [LineFive]: 2400,
    },
    [Cherry]: {
      [LineOne]: 1000,
      [LineTwo]: 2000,
      [LineThree]: 3000,
      [LineFour]: 4000,
      [LineFive]: 5000,
    },
  },
  [CherryOrSeven]: {
    [LineOne]: 75,
    [LineTwo]: 150,
    [LineThree]: 300,
    [LineFour]: 600,
    [LineFive]: 1200,
  },
  [AnyBar]: {
    [LineOne]: 5,
    [LineTwo]: 5,
    [LineThree]: 10,
    [LineFour]: 15,
    [LineFive]: 20,
  },
});
