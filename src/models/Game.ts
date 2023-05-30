import { BoardItem } from "./BoardItem"
import { Player } from "./Player"
import { solutions, GRID_LENGTH } from "./solutions";

export class Game {
  constructor(
    public players: Player[],
    public board: BoardItem[],
    public currentPlayerIndex: number,
    public turnCount: number
  ) {}
  nextTurn() {
    this.currentPlayerIndex = (this.currentPlayerIndex === 0) ? 1 : 0;
    this.turnCount--;
    console.log('counter: ' + this.turnCount)
  }
  checkSolution() {

  }
}