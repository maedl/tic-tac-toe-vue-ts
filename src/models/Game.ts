import { BoardItem } from "./BoardItem"
import { Player } from "./Player"

export class Game {
 constructor(
  public players: Player[],
  public board: BoardItem[],
  // public winner?: Player
 ) {}
}
