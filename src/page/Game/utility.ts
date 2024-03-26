const WIN_COMBINATIONS = [
  //ROW
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  // COLUMN
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  // DIAGONAL
  [0, 4, 8],
  [2, 4, 6],
];

export const checkWinner = (board: string[]) => {
  for (let combination of WIN_COMBINATIONS) {
    const [a, b, c] = combination;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }

  return null;
};

export const checkDraw = (board: string[]) => {
  return board.every((tile) => tile.length > 0);
};
