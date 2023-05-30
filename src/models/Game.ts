import { BoardItem } from "./BoardItem"
import { Player } from "./Player"

export class Game {
  constructor(
    public players: Player[],
    public board: BoardItem[],
    public currentPlayerIndex: number
  ) {}
  nextTurn() {
    this.currentPlayerIndex = (this.currentPlayerIndex === 0) ? 1 : 0;
  }
}