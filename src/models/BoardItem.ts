import { GamePiece } from "./Player";

export class BoardItem {
  constructor(
    public index: number,
    public placedPiece: GamePiece = GamePiece.EMPTY,
  ) {} 
}
