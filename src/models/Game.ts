import { BoardItem } from "./BoardItem"
import { GamePiece, Player } from "./Player"
import { winningCombinations, GRID_LENGTH } from "./solutions";

export enum gameEndType {
  win = 'win',
  draw = 'draw'
}

export class Game {
  constructor(
    public players: Player[],
    public board: BoardItem[],
    public currentPlayerIndex: number,
    public turnCount: number,
    public gameOver: boolean = false,
    public isWon: boolean = false,
    public isDraw: boolean = false,
  ) {}
  nextTurn() {
    this.currentPlayerIndex = (this.currentPlayerIndex === 0) ? 1 : 0;
    this.turnCount--;
    console.log('counter: ' + this.turnCount)
  }
  checkSolution() {
    for (let i = 0; i < winningCombinations.length; i++) {

      const threeInARow = [GamePiece.EMPTY, GamePiece.EMPTY, GamePiece.EMPTY]

      for (let j = 0; j < 3; j++) {
        threeInARow[j] = this.board[winningCombinations[i][j]].placedPiece
      }
      const firstPiece = threeInARow[0];
      if (firstPiece !== GamePiece.EMPTY && threeInARow.every(piece => piece === firstPiece)) {
        this.isWon = true;
        this.gameOver = true;
      }
    }
  }
}

