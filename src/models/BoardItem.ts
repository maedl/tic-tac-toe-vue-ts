import { GamePiece } from "./Player";

export class BoardItem {
  constructor(
    public index: number,
    public id: string,
    public placedPiece: GamePiece = GamePiece.EMPTY,
  ) {} 
}
